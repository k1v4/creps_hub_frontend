import React, { useState, useEffect } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Badge } from '@mui/material';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import dayjs, { Dayjs } from 'dayjs';
import ShoeCalendar from './get';

// Тип для даты
interface HighlightedDate {
  id: number;
  date: Dayjs;
}

// Моковые данные из бэкенда
const highlightedDates: HighlightedDate[] = [
  { id: 1, date: dayjs(new Date(2025, 2, 15)) },
  { id: 2, date: dayjs(new Date(2023, 9, 20)) },
  { id: 3, date: dayjs(new Date(2025, 2, 25)) },
];

// Кастомизация для подсветки дат
const ServerDay = (
  props: PickersDayProps<Dayjs> & { highlightedDates?: HighlightedDate[] }
) => {
  const { highlightedDates = [], day, outsideCurrentMonth, ...other } = props;

  const isHighlighted = highlightedDates.some(
    (highlighted) =>
      highlighted.date.isSame(day, 'year') &&
      highlighted.date.isSame(day, 'month') &&
      highlighted.date.isSame(day, 'day')
  );

  return (
    <Badge
      key={day.toString()}
      overlap="circular"
      badgeContent={isHighlighted ? '●' : undefined}
      color="primary"
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        disabled={outsideCurrentMonth}
        sx={{
          backgroundColor: isHighlighted ? 'black' : 'transparent',
          color: isHighlighted ? 'white' : 'black',
          borderRadius: '50%',
        }}
      />
    </Badge>
  );
};

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs());
  const [showHello, setShowHello] = useState<boolean>(false);

  const handleAddShoe = () => {
    // Переключаем состояние
    setShowHello(!showHello);
  };

  useEffect(() => {
    const initialMonth = dayjs();
    setCurrentMonth(initialMonth);
    console.log('Текущий месяц:', initialMonth.format('MMMM YYYY'));
  }, []);

  const filteredHighlightedDates = highlightedDates.filter(
    (item) =>
      item.date.isSame(currentMonth, 'year') &&
      item.date.isSame(currentMonth, 'month')
  );

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      const highlightedDate = highlightedDates.find(
        (highlighted) =>
          highlighted.date.isSame(date, 'year') &&
          highlighted.date.isSame(date, 'month') &&
          highlighted.date.isSame(date, 'day')
      );

      if (highlightedDate) {
        setSelectedDate(date);
        console.log('Выбрана дата:', date.format('DD.MM.YYYY'));
        console.log('ID подсвеченной даты:', highlightedDate.id);

        handleAddShoe();
      }
    }
  };

  return (
    <div>
      {showHello ? ( // Условный рендеринг
          <ShoeCalendar onClose={handleAddShoe}/>
        ) : (
        <div className="calendarContainer">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              sx={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                backgroundColor: 'white',
              }}
              value={selectedDate}
              onChange={handleDateChange}
              disableFuture
              disablePast
              views={['day']}
              slots={{
                day: ServerDay,
              }}
              slotProps={{
                day: {
                  highlightedDates: filteredHighlightedDates,
                } as any,
              }}
            />
          </LocalizationProvider>
        </div>
        )}
    </div>
  );
};

export default Calendar;
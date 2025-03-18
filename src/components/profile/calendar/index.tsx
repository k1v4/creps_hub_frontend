import React, { useState } from 'react';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Badge } from '@mui/material';
import { PickersDay, PickersDayProps } from '@mui/x-date-pickers/PickersDay';
import dayjs, { Dayjs } from 'dayjs'; // Импортируем Dayjs

// Тип для даты
interface HighlightedDate {
  id: number;
  date: Dayjs; // Используем Dayjs вместо Date
}

// Моковые данные из бэкенда
const highlightedDates: HighlightedDate[] = [
  { id: 1, date: dayjs(new Date(2025, 2, 15)) }, // 15 октября 2023
  { id: 2, date: dayjs(new Date(2025, 9, 20)) }, // 20 октября 2023
  { id: 3, date: dayjs(new Date(2025, 9, 25)) }, // 25 октября 2023
  { id: 4, date: dayjs(new Date(2025, 10, 5)) }, // 5 ноября 2023
  { id: 5, date: dayjs(new Date(2025, 0, 10)) }, // 10 января 2024
];

// Кастомизация для подсветки дат
const ServerDay = (
  props: PickersDayProps<Dayjs> & { highlightedDates?: HighlightedDate[] }
) => {
  const { highlightedDates = [], day, outsideCurrentMonth, ...other } = props;

  // Проверяем, должна ли дата быть подсвечена
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
      badgeContent={isHighlighted ? '●' : undefined} // Используем символ кружка
      color="primary" // Цвет кружка
    >
      <PickersDay
        {...other}
        outsideCurrentMonth={outsideCurrentMonth}
        day={day}
        sx={{
          backgroundColor: isHighlighted ? 'black' : 'transparent', // Чёрный фон для подсвеченных дат
          color: isHighlighted ? 'white' : 'black', // Белый текст для подсвеченных дат
          borderRadius: '50%', // Круглая форма
        }}
      />
    </Badge>
  );
};

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs()); // Используем Dayjs
  const [currentMonth, setCurrentMonth] = useState<Dayjs>(dayjs()); // Текущий месяц

  // Фильтруем подсвеченные даты по текущему месяцу и году
  const filteredHighlightedDates = highlightedDates.filter(
    (item) =>
      item.date.isSame(currentMonth, 'year') &&
      item.date.isSame(currentMonth, 'month')
  );

  // Обработчик изменения месяца
  const handleMonthChange = (date: Dayjs) => {
    setCurrentMonth(date);
  };

  return (
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
          onChange={(newValue: Dayjs | null) => setSelectedDate(newValue)}
          onMonthChange={handleMonthChange} // Обработчик изменения месяца
          slots={{
            day: ServerDay, // Переопределяем компонент для отображения дней
          }}
          slotProps={{
            day: {
              highlightedDates: filteredHighlightedDates, // Передаем отфильтрованные подсвеченные даты
            } as any,
          }}
        />
      </LocalizationProvider>
    </div>
  );
};

export default Calendar;
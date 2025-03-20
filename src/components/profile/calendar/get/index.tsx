import React, { useEffect, useState } from 'react';
import { Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

interface ShoeCalendarProps {
  onClose: () => void;
  selectedDateId: number | null;
}

interface ShoeDetails {
  id: number;
  name: string;
  release_date: string;
}

const ShoeCalendar: React.FC<ShoeCalendarProps> = ({ onClose, selectedDateId }) => {
  const [shoeDetails, setShoeDetails] = useState<ShoeDetails | null>(null);

  useEffect(() => {
    if (selectedDateId !== null) {
      fetchShoeDetails(selectedDateId);
    }
  }, [selectedDateId]);

  // Функция для загрузки данных
  const fetchShoeDetails = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:8083/api/v1/releases/${id}`);
      console.log('Данные о релизе:', response.data);
      setShoeDetails(response.data); // Сохраняем данные в состоянии
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  return (
    <div>
        <Button
            variant="contained"
            sx={{
            background: 'transparent',
            color: '#F9F8F3',
            borderRadius: '15px',
            border: '1px solid #F9F8F3',
            marginLeft: '5%',
            }}
            className='back-button'
            onClick={onClose}
            startIcon={<ArrowBackIcon />}
        >
            Назад
        </Button>
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            maxWidth={640}
            margin='auto'
            padding={1}
            borderRadius={5}
            bgcolor='#FFFFF8'
        >
            <img
              src='https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/TBA.jpg'
              alt='Пример изображения'
              style={{ maxWidth: '100%', height: 'auto', border: '2px solid black', borderRadius: '20px' }}
            />
            <h1>{shoeDetails ? shoeDetails.name : 'Загрузка...'}</h1>
        </Box>
    </div>
    
  );
};

export default ShoeCalendar;
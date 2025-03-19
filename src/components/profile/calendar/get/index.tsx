import React from 'react';
import { Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface ShoeCalendarProps {
  onClose: () => void; // Функция для закрытия формы
}

const ShoeCalendar: React.FC<ShoeCalendarProps> = ({ onClose }) => {
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
            <p>Это параграф</p>
            <img
            src='https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png'
            alt='Пример изображения'
            style={{ maxWidth: '100%', height: 'auto' }}
            />
            <h1>Это заголовок</h1>
        </Box>
    </div>
    
  );
};

export default ShoeCalendar;
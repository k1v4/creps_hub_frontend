import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

const FashionWeekForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handlePublish = () => {
    console.log('Заголовок:', title);
    console.log('Краткое описание:', description);
  };

  return (
    <form className='addArticle'>
      <Box>
        <TextField 
          className='articleHeaderInput'
          margin="normal"
          variant="outlined"
          placeholder="Введите название статьи"
          defaultValue={'Новая статья'}
          fullWidth
          sx={{ 
            backgroundColor: 'transparent',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent', // Убираем границу по умолчанию
              },
              '&:hover fieldset': {
                borderColor: 'transparent', // Убираем границу при наведении
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', // Убираем границу при фокусе
              },
            },
            '& .MuiInputLabel-root': {
              color: '#F9F8F399', // Прозрачный цвет текста метки
            },
            '& .MuiInputBase-input': {
              color: '#F9F8F399', // Прозрачный цвет текста ввода
            },
          }}
        />
        <TextField
          margin="normal"
          label="Текст"
          variant="outlined"
          placeholder="Введите текст статьи"
          fullWidth
          multiline // Включаем многострочный режим
          minRows={3} // Начальное количество строк
          maxRows={10} // Максимальное количество строк
          sx={{ 
            backgroundColor: 'transparent',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent', // Убираем границу по умолчанию
              },
              '&:hover fieldset': {
                borderColor: 'transparent', // Убираем границу при наведении
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', // Убираем границу при фокусе
              },
            },
            '& .MuiInputLabel-root': {
              color: '#F9F8F399', // Прозрачный цвет текста метки
            },
            '& .MuiInputBase-input': {
              color: '#F9F8F399', // Прозрачный цвет текста ввода
            },
          }}
        />
        <div className='addButtons'>
            <Button
                className='add'
                variant="contained"
                color="primary"
                onClick={handlePublish}
            >
                Опубликовать
            </Button>
            <Button
                className='cancel'
                variant="contained"
                color="primary"
                onClick={handlePublish}
            >
                Отменить
            </Button>
        </div>
      </Box>
    </form>
  );
};

export default FashionWeekForm;
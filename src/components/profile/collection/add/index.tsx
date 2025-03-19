import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add'; // Импортируем иконку плюса

const AddShoeForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [photo, setPhoto] = useState<File | null>(null);

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(event.target.files[0]);
    }
  };

  const handlePublish = () => {
    console.log('Заголовок:', title);
    console.log('Краткое описание:', description);
    if (photo) {
      console.log('Фото:', photo.name);
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setPhoto(null);
  };

  return (
    <form className='addArticle'>
      <Box>
        {/* Форма загрузки фото */}
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            style={{ display: 'none' }}
            id="upload-photo"
          />
          <label htmlFor="upload-photo">
            <Box
              sx={{
                width: '20vw', // Размер квадрата
                height: '20vw', // Размер квадрата
                backgroundColor: '#808080', // Серый цвет
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px', // Скругление углов
                cursor: 'pointer',
                border: '2px dashed #F9F8F3', // Пунктирная рамка
                '&:hover': {
                  backgroundColor: '#6b6b6b', // Цвет при наведении
                },
              }}
            >
              <AddIcon sx={{ fontSize: '48px', color: '#F9F8F3' }} /> {/* Иконка плюса */}
            </Box>
          </label>
        </div>

        {/* Поле для текста статьи */}
        <TextField
          margin="normal"
          label="Введите название пары"
          variant="outlined"
          placeholder="Введите название пары"
          fullWidth
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            backgroundColor: 'transparent',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                borderColor: 'transparent',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent',
              },
            },
            '& .MuiInputLabel-root': {
              color: '#F9F8F399',
            },
            '& .MuiInputBase-input': {
              color: '#F9F8F399',
            },
          }}
        />

        {/* Кнопки */}
        <div className='addButtons'>
          <Button
            className='add'
            variant="contained"
            color="primary"
            onClick={handlePublish}
            sx={{
              backgroundColor: '#F9F8F3',
              color: '#0E0F15',
              fontFamily: 'Inter',
              borderRadius: '15px',
              marginRight: '8px',
            }}
          >
            Опубликовать
          </Button>
          <Button
            className='cancel'
            variant="contained"
            color="primary"
            onClick={handleCancel}
            sx={{
              backgroundColor: '#F9F8F3',
              color: '#0E0F15',
              fontFamily: 'Inter',
              borderRadius: '15px',
            }}
          >
            Отменить
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default AddShoeForm;
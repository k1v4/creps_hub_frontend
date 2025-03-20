import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useAuth } from '../../../../context/AuthContext'; // Импортируем useAuth для получения токена

const FashionWeekForm: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [photo, setPhoto] = useState<File | null>(null); // Состояние для хранения загруженного фото
  const { getTokens } = useAuth(); // Получаем токены из контекста

  // Обработчики изменений полей
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  // Обработчик загрузки фото
  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      if (file.type === 'image/png' || file.type === 'image/jpeg') {
        setPhoto(file); // Сохраняем файл в состоянии
      } else {
        alert('Пожалуйста, загрузите изображение в формате PNG или JPG.');
      }
    }
  };

  // Функция для чтения файла как base64
  const readFileAsBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = (reader.result as string).split(',')[1]; // Убираем префикс "data:image/..."
        resolve(base64String);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file); // Читаем файл как Data URL
    });
  };

  // Обработчик публикации статьи
  const handlePublish = async () => {
    if (!photo) {
      alert('Пожалуйста, загрузите фото.');
      return;
    }

    try {
      // Читаем фото как base64
      const imageData = await readFileAsBase64(photo);

      // Получаем JWT-токен
      const tokens = getTokens();
      if (!tokens?.accessToken) {
        alert('Ошибка аутентификации. Пожалуйста, войдите снова.');
        return;
      }

      // Отправляем данные на сервер
      const response = await fetch('http://localhost:8082/api/v1/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokens.accessToken}`,
        },
        body: JSON.stringify({
          name: title, // Название статьи
          text: description, // Текст статьи
          image_name: photo.name, // Имя файла с расширением
          image_data: imageData, // Изображение в формате base64
        }),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных на сервер');
      }

      const result = await response.json();
      console.log('Успешно отправлено:', result);

      // Очищаем форму после успешной отправки
      setTitle('');
      setDescription('');
      setPhoto(null);
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при отправке данных.');
    }
  };

  return (
    <form className='addArticle'>
      <Box>
        <div style={{ marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
        <input
          type="file"
          accept="image/png, image/jpeg" // Разрешаем только PNG и JPG
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

        <TextField
          className='articleHeaderInput'
          margin="normal"
          variant="outlined"
          placeholder="Введите название статьи"
          value={title}
          onChange={handleTitleChange}
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
          value={description}
          onChange={handleDescriptionChange}
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
            onClick={() => {
              setTitle('');
              setDescription('');
              setPhoto(null);
            }}
          >
            Отменить
          </Button>
        </div>
      </Box>
    </form>
  );
};

export default FashionWeekForm;
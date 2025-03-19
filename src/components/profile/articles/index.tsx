import { Add } from '@mui/icons-material';
import { Button } from '@mui/material';
import React, { JSX, useEffect, useState } from 'react';
import FashionWeekForm from './add';
import { instance } from '../../../utils/axios';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// Тип для элемента коллекции
interface Item {
  id: number;
  name: string;
  url: string;
}

const Articles: React.FC = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);
  const [showHello, setShowHello] = useState<boolean>(false);
  const { getTokens, setTokens } = useAuth(); // Добавляем setTokens для обновления токенов
  const navigate = useNavigate();

  // Функция для обновления токенов
  const refreshTokens = async () => {
    const tokens = getTokens(); // Получаем текущие токены
    try {
      const response = await instance.post('http://localhost:8080/api/v1/refresh', {
        refreshToken: tokens?.refreshToken, // Передаём refresh token
      });
      const newTokens = response.data; // Предполагаем, что сервер возвращает новые токены
      setTokens(newTokens); // Обновляем токены в контексте
      return newTokens;
    } catch (error) {
      console.error('Ошибка при обновлении токенов:', error);
      throw error;
    }
  };

  // Функция для загрузки статей
  const fetchArticles = async () => {
    const tokens = getTokens(); // Получаем токены внутри функции
    if (!tokens?.accessToken) {
      console.error('Токен отсутствует');
      return;
    }

    try {
      const response = await instance.get('http://localhost:8082/api/v1/user_articles', {
        headers: { Authorization: `Bearer ${tokens.accessToken}` },
      });
      const fetchedItems = response.data.map((article: any) => ({
        id: article.id,
        name: article.name,
        url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
      }));
      setItems(fetchedItems);
    } catch (error: any) {
      console.log(error.response?.data?.message);

      if (error.response?.status === 401) {
        try {
          // Обновляем токены
          const newTokens = await refreshTokens();

          // Повторяем запрос с новым токеном
          const response = await instance.get('http://localhost:8082/api/v1/user_articles', {
            headers: { Authorization: `Bearer ${newTokens.accessToken}` },
          });
          const fetchedItems = response.data.map((article: any) => ({
            id: article.id,
            name: article.name,
            url: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/%D0%9F%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4.png',
          }));
          setItems(fetchedItems);
        } catch (refreshError) {
          console.error('Ошибка при обновлении токенов или повторном запросе:', refreshError);
          // Если обновление токенов не удалось, перенаправляем на страницу логина
          navigate('/login');
        }
      } else {
        console.error('Ошибка при загрузке статей:', error);
      }
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []); // Убираем tokens из зависимостей

  // Обработчик нажатия на кнопку
  const handleAddArticle = () => {
    setShowHello(!showHello);
  };

  return (
    <div className='articleMain'>
      <div className='buttonAdd'>
        <Button
          type='submit'
          sx={{
            fontFamily: 'Inter',
            width: '15vw',
            backgroundColor: '#F9F8F3',
            borderRadius: '15px',
            borderColor: '#fff',
            color: '#0E0F15',
          }}
          variant='contained'
          className='addShoes'
          endIcon={<Add />}
          onClick={handleAddArticle}
        >
          {showHello ? 'Показать статьи' : 'Добавить статью'}
        </Button>
      </div>
      <div>
        {showHello ? (
          <FashionWeekForm />
        ) : (
          <div className='articlesItems'>
            {items.map((item) => (
              <div className='item' key={item.id} onClick={() => { navigate(`/article/${item.id}`) }}>
                <img src={item.url} alt={item.name} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
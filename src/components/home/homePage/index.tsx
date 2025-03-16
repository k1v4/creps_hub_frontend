import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Импортируем axios (на будущее)
import { useNavigate } from 'react-router-dom';

// Тип для элемента статьи
interface Article {
  id: number;
  title: string;
  imageUrl: string;
  date: string; // Дата в формате dd.mm.yyyy
  author: string; // Имя автора
}

const Home = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const navigate = useNavigate()

  // Мок-данные
  const mockArticles: Article[] = [
    {
      id: 1,
      title: 'Статья 1',
      imageUrl: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/59357c316d1dbd99a8907cffd8a6b91b.jpg',
      date: '12.10.2023',
      author: 'Иван Иванов',
    },
    {
      id: 2,
      title: 'Статья 2',
      imageUrl: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/59357c316d1dbd99a8907cffd8a6b91b.jpg',
      date: '15.10.2023',
      author: 'Петр Петров',
    },
    {
      id: 3,
      title: 'Статья 3',
      imageUrl: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/59357c316d1dbd99a8907cffd8a6b91b.jpg',
      date: '18.10.2023',
      author: 'Анна Сидорова',
    },
    {
      id: 4,
      title: 'Статья 4',
      imageUrl: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/59357c316d1dbd99a8907cffd8a6b91b.jpg',
      date: '20.10.2023',
      author: 'Мария Кузнецова',
    },
    {
      id: 5,
      title: 'Статья 5',
      imageUrl: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/59357c316d1dbd99a8907cffd8a6b91b.jpg',
      date: '22.10.2023',
      author: 'Сергей Смирнов',
    },
    {
      id: 6,
      title: 'Статья 6',
      imageUrl: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/59357c316d1dbd99a8907cffd8a6b91b.jpg',
      date: '25.10.2023',
      author: 'Ольга Васильева',
    },
    {
      id: 7,
      title: 'Статья 7',
      imageUrl: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/59357c316d1dbd99a8907cffd8a6b91b.jpg',
      date: '28.10.2023',
      author: 'Дмитрий Павлов',
    },
    {
      id: 8,
      title: 'Статья 8',
      imageUrl: 'https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/59357c316d1dbd99a8907cffd8a6b91b.jpg',
      date: '30.10.2023',
      author: 'Елена Николаева',
    },
  ];

  // Загрузка данных при монтировании компонента
  useEffect(() => {
    // Временно используем мок-данные
    setArticles(mockArticles);

    // Если нужно переключиться на реальный запрос, раскомментируйте:
    // fetchArticles();
  }, []);

  // Функция для загрузки статей (оставлена для будущего использования)
  const fetchArticles = async () => {
    try {
      const limit = 8; // Количество статей для загрузки
      const offset = 0; // Смещение (например, для пагинации)
      const response = await axios.get(
        `http://localhost:8082/api/v1/articles?limit=${limit}&offset=${offset}`
      );

      // Устанавливаем данные в состояние
      setArticles(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке статей:', error);
    }
  };

  return (
    <div className='homeRoot'>
      <div>
        <div className='mainImg' style={{ width: '100%', height: '67vh', overflow: 'hidden', marginBottom: '2%' }}>
          <img
            src='https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/CREPS_HUB_main%20(4).png'
            alt="Описание изображения"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              borderRadius: '20px',
            }}
          />
        </div>

        <h1 className='slogan'>Stressed. Depressed. But well dressed.</h1>

        <div className='items-container'>
          {articles.map((article) => (
            <div key={article.id} className='item' onClick={() => {navigate(`/article`)}}>
              <div className='article-content'>
                <img src={article.imageUrl} alt={article.title} className='article-image' />
                <div className='article-text'>
                  <h2>{article.title}</h2>
                  <div className='article-meta'>
                    <span className='author'>{article.author}</span>
                    <span className='date'>{article.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
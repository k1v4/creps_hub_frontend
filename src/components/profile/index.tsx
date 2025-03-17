import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import './style.scss';
import React, { useState, useEffect } from 'react';


// Тип для элемента статьи
interface Article {
  id: number;
  title: string;
  imageUrl: string;
  date: string; // Дата в формате dd.mm.yyyy
  author: string; // Имя автора
}

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState('profile'); // Дефолтное значение

  useEffect(() => {
    if (location.state?.selectedTab) {
      setSelectedButton(location.state.selectedTab);
    }
  }, [location.state]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Выбрана кнопка:', event.target.id); // Логируем выбор
    setSelectedButton(event.target.id);
  }

  return (
    <div className='profileRoot'>
      <header>
        <h1 className='logo-profile' onClick={() => navigate('/')}>
          CREPS HUB
        </h1>
        <div className='switch-buttons'>
          <div className='radio-tile-group'>

            <div className='input-container'>
              <input id='profile' type='radio' name='radio' checked={selectedButton === 'profile'} onChange={handleChange} />
              <div className='radio-tile'>
                <label htmlFor='profile'>Профиль</label>
              </div>
            </div>

            <div className='input-container'>
              <input id='collection' type='radio' name='radio' checked={selectedButton === 'collection'} onChange={handleChange}/>
              <div className='radio-tile'>
                <label htmlFor='collection'>Коллекция</label>
              </div>
            </div>

            <div className='input-container'>
              <input id='myArticles' type='radio' name='radio' checked={selectedButton === 'myArticles'} onChange={handleChange}/>
              <div className='radio-tile'>
                <label htmlFor='myArticles'>Мои статьи</label>
              </div>
            </div>

            <div className='input-container'>
              <input id='favourites' type='radio' name='radio' checked={selectedButton === 'favourites'} onChange={handleChange}/>
              <div className='radio-tile'>
                <label htmlFor='favourites'>Избранное</label>
              </div>
            </div>

            <div className='input-container'>
              <input id='calendar' type='radio' name='radio' checked={selectedButton === 'calendar'} onChange={handleChange}/>
              <div className='radio-tile'>
                <label htmlFor='calendar'>Календарь релизов</label>
              </div>
            </div>

          </div>
        </div>
      </header>
      <div className='main'>
        {/* <Box>
          {location.pathname === '/' ? (
            <Home />
          ) : location.pathname === '/article' ? (
            <GetArticlePage navigate={navigate} />
          ) : null}
        </Box> */}
      </div>
    </div>
  );
};

export default Profile;
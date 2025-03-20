import { useLocation, useNavigate } from 'react-router-dom';
import './style.scss';
import React, { useState, useEffect, useMemo } from 'react';
import Personal from './personal';  
import Collection from './collection';
import Articles from './articles';
import Calendar from './calendar';
import DeleteProfile from './delete';
import ArticleEditor from './quill';

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

  const renderContent = () => {
    switch (selectedButton) {
      case 'profile':
        return <Personal />;
      case 'collection':
        return <Collection />;
      case 'myArticles':
        return <Articles />;
      case 'calendar':
        return <Calendar />
      case 'delete':
        return <DeleteProfile />
      default:
        return <div>Другой раздел</div>;
    }
  };

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
              <input id='calendar' type='radio' name='radio' checked={selectedButton === 'calendar'} onChange={handleChange}/>
              <div className='radio-tile'>
                <label htmlFor='calendar'>Календарь релизов</label>
              </div>
            </div>

            <div className='input-container'>
              <input id='delete' type='radio' name='radio' checked={selectedButton === 'delete'} onChange={handleChange}/>
              <div className='radio-tile'>
                <label htmlFor='delete'>Удалить Профиль</label>
              </div>
            </div>

          </div>
        </div>
      </header>
      <div className='main'>
        {renderContent()}
      </div>
    </div>
  );
};

export default Profile;
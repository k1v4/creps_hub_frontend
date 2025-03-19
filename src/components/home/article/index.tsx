import React, { JSX } from 'react';
import { IPropsGetArticle } from '../../../common/types/auth';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const GetArticlePage: React.FC<IPropsGetArticle> = (props: IPropsGetArticle): JSX.Element => {
  const { navigate } = props;

  return (
    <div className='page-container'>
      <Button
        variant="contained"
        sx={{
          background: 'transparent',
          color: '#F9F8F3',
          borderRadius: '15px',
          border: '1px solid #F9F8F3', // Указываем ширину, стиль и цвет границы
        }}
        className='back-button'
        onClick={() => navigate('/')}
        startIcon={<ArrowBackIcon />}
      >
        Назад
      </Button>

      <div className='center-content'>
        <h1>Заголовок статьи</h1>
        <p>
          Текст статьи. Здесь может быть много текста, который будет занимать центральную часть страницы.
        </p>
      </div>
    </div>
  );
};

export default GetArticlePage;
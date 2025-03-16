import React, { Fragment, JSX } from 'react';
import { IPropsGetArticle } from '../../../common/types/auth';

const GetArticlePage: React.FC<IPropsGetArticle> = (props: IPropsGetArticle): JSX.Element => {
  const { navigate } = props;

  return (
    <div className='page-container'>
      {/* Кнопка "Назад" */}
      <button onClick={() => navigate('/')} className='back-button'>
        Назад
      </button>

      {/* Центрированный текст с заголовком */}
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
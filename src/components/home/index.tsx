import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './style.scss';
import Add from '@mui/icons-material/Add';
import axios from 'axios'; // Импортируем axios (на будущее)
import { Box } from '@mui/material';
import Home from './homePage';
import GetArticlePage from './article';

// Тип для элемента статьи
interface Article {
  id: number;
  title: string;
  imageUrl: string;
  date: string; // Дата в формате dd.mm.yyyy
  author: string; // Имя автора
}

const MainHome = () => {
    const location = useLocation()
    const navigate = useNavigate()


    return (
    <div className='homeRoot'>
        <header>
            <h1>CREPS HUB</h1>
            <div className='buttons'>
                <Button
                    variant="contained"
                    sx={{ background: 'white', color: '#0E0F15', borderRadius: '15px' }}
                    endIcon={<Add />}
                >
                Опубликовать статью
                </Button>
                <IconButton aria-label="delete" sx={{ color: 'white' }}>
                    <AccountCircle fontSize='large' />
                </IconButton>
            </div>
        </header>
        <div className='main'>
            <Box>
                    {
                        location.pathname === '/' 
                            ? <Home /> : location.pathname === '/article' 
                                ? <GetArticlePage navigate={navigate}/> : null
                    }
            </Box>
      </div>
      <footer>
        <h1>CREPS HUB</h1>
      </footer>
    </div>
  );
};

export default MainHome;
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './style.scss';
import Add from '@mui/icons-material/Add';
import axios from 'axios'; // Импортируем axios (на будущее)

// Тип для элемента статьи
interface Article {
  id: number;
  title: string;
  imageUrl: string;
  date: string; // Дата в формате dd.mm.yyyy
  author: string; // Имя автора
}

const Profile = () => {
    const location = useLocation()
    const navigate = useNavigate()


    return (
    <div className='profileRoot'>
        <header>
            <h1 className='logo-profile' onClick={() => navigate('/')}>CREPS HUB</h1>
            <div className='switch-buttons'>
                
            </div>
        </header>
        <div className='main'>
            {/* <Box>
                    {
                        location.pathname === '/' 
                            ? <Home /> : location.pathname === '/article' 
                                ? <GetArticlePage navigate={navigate}/> : null
                    }
            </Box> */}
      </div>
    </div>
  );
};

export default Profile;
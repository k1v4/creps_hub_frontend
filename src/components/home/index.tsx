import React from 'react';
import { IconButton, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './style.scss';
import Add from '@mui/icons-material/Add'


const Home = () => {
  return (
    <div className='homeRoot'>
      <header>
        <h1>CREPS HUB</h1>
        <div className='buttons'>
          <Button 
            variant="contained" 
            sx={{background: 'white', color: '#0E0F15', borderRadius: '15px' }} 
            endIcon={<Add />}>Опубликовать статью</Button>
          <IconButton aria-label="delete" sx={{ color: 'white' }}>
            <AccountCircle fontSize='large'/>
          </IconButton>
        </div>
      </header>
      <div className='main'>
        <div style={{ width: '100%', height: '40vh', overflow: 'hidden' }}>
          <img
            src='https://82a3fa46-643f-4a21-8a10-c2889596892b.selstorage.ru/59357c316d1dbd99a8907cffd8a6b91b.jpg'
            alt="Описание изображения"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
            }}
          />
        </div>

        <h1>This is Home page</h1>
      </div>
      <footer>
        <h1>CREPS HUB</h1>
      </footer>
    </div>
  );
}

export default Home;

import { Button, TextField, Typography } from '@mui/material';
import React, { Fragment } from 'react';

const LoginPage = () => {
  return (
    <>
      <Typography variant="h2" fontFamily='poppins' textAlign='center'>Авторизация</Typography>
      <Typography variant="body1" marginBottom={1.5} fontFamily='poppins' textAlign='center'>Введите ваш логин и пароль</Typography>
      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email'/>
      <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введите ваш пароль'/>
      <Button sx={{fontFamily:'poppins', marginTop:1.5, width:'60%', marginBottom:2}} variant="contained">Войти</Button>
      <Typography variant="body1" sx={{fontFamily:'poppins'}}>У вас нет аккаунта?<span className='incitingText'>Регистрация</span></Typography>
    </>
  );
}

export default LoginPage;

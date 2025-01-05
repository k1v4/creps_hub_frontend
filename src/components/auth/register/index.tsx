import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

const RegisterPage = () => {
  return (
    <>
    <Typography variant="h2" fontFamily='poppins' textAlign='center'>Регистрация</Typography>
    <Typography variant="body1" marginBottom={1.5} fontFamily='poppins' textAlign='center'>Введите данные для регистрации</Typography>
    <TextField fullWidth={true} margin='normal' label="Имя" variant="outlined" placeholder='Введите ваше имя'/>
    <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Введите ваш Username'/>
    <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email'/>
    <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введите ваш пароль'/>
    <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Повторите ваш пароль'/>
    <Button sx={{fontFamily:'poppins', marginTop:1.5, width:'60%', marginBottom:2}} variant="contained">Регистрация</Button>
    <Typography variant="body1" sx={{fontFamily:'poppins'}}>Уже сеть аккаунт?<span className='incitingText'>Войти</span></Typography>
  </>
  );
}

export default RegisterPage;
import { Button, TextField, Typography } from '@mui/material';
import React, { Fragment, JSX } from 'react';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage : React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const {setEmail, setPassword, navigate} = props 
  
  return (
    <>
      <Typography variant="h2" fontFamily='poppins' textAlign='center'>Авторизация</Typography>
      <Typography variant="body1" marginBottom={1.5} fontFamily='poppins' textAlign='center'>Введите ваш логин и пароль</Typography>
      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)}/>
      <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)}/>
      <Button type='submit' sx={{fontFamily:'poppins', marginTop:1.5, width:'60%', marginBottom:2}} variant="contained">Войти</Button>
      <Typography variant="body1" sx={{fontFamily:'poppins'}}>У вас нет аккаунта?<span className='incitingText' onClick={() => {navigate('/register')}}>Регистрация</span></Typography>
    </>
  );
}

export default LoginPage;

import { Button, TextField, Typography } from '@mui/material';
import React, { Fragment, JSX } from 'react';
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage : React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const {setEmail, setPassword, navigate} = props 
  
  return (
    <>
      <Typography variant="h6" fontFamily='Inter' textAlign='center'>Войдите в аккаунт, чтобы получить возможность оценивать статьи и публиковать их!</Typography>
      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)}/>
      <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)}/>
      <Button type='submit' sx={{fontFamily:'Inter', marginTop:1.5, width:'65%', marginBottom:2, background:'#0E0F15', borderRadius:'15px'}} variant="contained">Войти</Button>
      <Typography variant="body1" sx={{fontFamily:'poppins', color:'#717070', fontSize:'3vh'}}>У вас нет аккаунта?</Typography>
      <Button type='submit' sx={{fontFamily:'Inter', marginTop:1.5, width:'65%', backgroundColor: 'transparent', borderRadius:'15px', borderColor:'#0E0F15', color:'#0E0F15'}} variant="contained" onClick={() => {navigate('/register')}}>Зарегистрироваться</Button>
    </>
  );
}

export default LoginPage;

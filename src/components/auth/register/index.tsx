import { Button, TextField, Typography } from '@mui/material';
import React, { JSX } from 'react';
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const {setEmail, setPassword, setRetryPassword, setUserName, navigate} = props 

  return (
    <>
      <Typography variant="h2" fontFamily='poppins' textAlign='center'>Регистрация</Typography>
      <Typography variant="body1" marginBottom={1.5} fontFamily='poppins' textAlign='center'>Введите данные для регистрации</Typography>
      <TextField fullWidth={true} margin='normal' label="Username" variant="outlined" placeholder='Введите ваш Username' onChange={(e) => setUserName(e.target.value)}/>
      <TextField fullWidth={true} margin='normal' label="Email" variant="outlined" placeholder='Введите ваш email' onChange={(e) => setEmail(e.target.value)}/>
      <TextField type='password' fullWidth={true} margin='normal' label="Password" variant="outlined" placeholder='Введите ваш пароль' onChange={(e) => setPassword(e.target.value)}/>
      <TextField type='password' fullWidth={true} margin='normal' label="Retry Password" variant="outlined" placeholder='Повторите ваш пароль' onChange={(e) => setRetryPassword(e.target.value)}/>
      <Button type='submit' sx={{fontFamily:'poppins', marginTop:1.5, width:'60%', marginBottom:2}} variant="contained">Регистрация</Button>
      <Typography variant="body1" sx={{fontFamily:'poppins'}}>Уже есть аккаунт?<span className='incitingText' onClick={() => {navigate('/login')}}>Войти</span></Typography>
    </>
  );
}

export default RegisterPage;
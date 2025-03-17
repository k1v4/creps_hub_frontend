import { Box, Button, TextField } from '@mui/material';
import React, { JSX } from 'react';

const Personal: React.FC = (): JSX.Element => {
  return (
    <div className='personalMain'>
        <form className="formPersonal">
            <Box
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                maxWidth='55%'
                margin='auto'
                padding='2% 5%'
                borderRadius={5}
                bgcolor='#F9F8F3'
            >
                <h1 className='personalDataHeader'>Ваши данные</h1>
                <div className="userInfo">
                    <TextField
                        margin="normal"
                        label="Имя"
                        variant="outlined"
                        placeholder="Введите ваше имя"
                        fullWidth // Занимает всю доступную ширину
                    />
                    <TextField
                        margin="normal"
                        label="Фамилия"
                        variant="outlined"
                        placeholder="Введите вашу фамилию"
                        fullWidth// Занимает всю доступную ширину
                    />
                    <TextField
                        margin="normal"
                        label="Никнейм"
                        variant="outlined"
                        placeholder="Введите ваш никнейм"
                        fullWidth // Занимает всю доступную ширину
                    />
</div>
                <div className="userInfo">
                    <TextField margin='normal' label="Пароль" variant="outlined" placeholder='Введите ваш email'/>
                    <TextField margin='normal' label="Электронная почта" variant="outlined" placeholder='Введите ваш email'/>
                    <Button 
                        type='submit' 
                        sx={{
                            fontFamily:'Inter',
                            marginTop:1.5, 
                            width:'100%', 
                            backgroundColor: 'transparent', 
                            borderRadius:'15px', 
                            borderColor:'#0E0F15', 
                            color:'#0E0F15'
                        }} 
                        variant="contained"
                        className='submitUserProfileChanges'
                    >
                        Сохранить изменения
                    </Button>
                </div>
            </Box>
        </form>
    </div>
  );
};

export default Personal;
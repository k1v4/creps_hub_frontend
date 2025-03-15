import React, { JSX, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import './style.scss';
import { Box } from '@mui/material';
import { instance } from '../../utils/axios';
import { useAppDispatch } from '../../utils/hook';
import { login } from '../../store/slice/auth';
import { AppErrors } from '../../common/errors';

const AuthRootComponent: React.FC = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [retryPassword, setRetryPassword] = useState('')
    const [userName, setUserName] = useState('')
    const location = useLocation()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        if (location.pathname === '/login'){
            try{
                const userData = {
                    email,
                    password,
                }
                    
                const user = await instance.post('/api/v1/login', userData)
                await dispatch(login(user.data))

                navigate('/')
            }catch (e){
                return e
            }
        } else{
            if (password === retryPassword){
                try{
                    const userData = {
                        email,
                        password
                    }
                        
                    const newUserId = await instance.post('/api/v1/register', userData)
                    await dispatch(login(newUserId.data))
    
                    navigate('/')
                } catch(e){
                    return e
                }

            } else{
                throw new Error(AppErrors.PasswordNotMatch)
            }
        } 
    }

    return (
        <div className='root'>
            <h1>CREPS HUB</h1>
            <form className="form" onSubmit={handleSubmit}>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    flexDirection='column'
                    maxWidth={640}
                    margin='auto'
                    padding={5}
                    borderRadius={5}
                    bgcolor='#FFFFF8'
                >
                    {
                        location.pathname === '/login' 
                            ? <LoginPage setEmail={setEmail} setPassword={setPassword} navigate={navigate}/> : location.pathname === '/register' 
                                ? <RegisterPage 
                                    setEmail={setEmail} 
                                    setPassword={setPassword} 
                                    setRetryPassword={setRetryPassword} 
                                    setUserName={setUserName}
                                    navigate={navigate}
                                /> : null
                    }
                </Box>
            </form>
        </div>
    );
}

export default AuthRootComponent;
import React from 'react';
import MainHome from './components/home';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import Profile from './components/profile';


function App() {
  return (  
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          
        </Route>
        <Route path='/' element={<MainHome />}/>
        <Route path='article' element={<MainHome />}/>
        <Route path='login' element={<AuthRootComponent />}/>
        <Route path='register' element={<AuthRootComponent />}/>
        <Route path='profile' element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;

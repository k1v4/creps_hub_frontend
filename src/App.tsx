import React from 'react';
import MainHome from './components/home';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import GetArticlePage from './components/home/article';


function App() {
  return (  
    <div className="app">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path='/' element={<MainHome />}/>
          <Route path='article' element={<MainHome />}/>
        </Route>
        <Route path='login' element={<AuthRootComponent />}/>
        <Route path='register' element={<AuthRootComponent />}/>
      </Routes>
    </div>
  );
}

export default App;

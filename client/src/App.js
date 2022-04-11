import React from 'react';
import Login from './compunint/Login';
import Home from './compunint/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import './style/style.css';
import Bils from './compunint/Bils';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/Bils' element={<Bils />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;

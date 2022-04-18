import Home from './compunint/Home';
import React from 'react';
import Login from './compunint/Login';

import './style/style.css';

function App() {
  let login = sessionStorage.getItem('login');
  return <div className='App'>{login ? <Home /> : <Login />}</div>;
}

export default App;

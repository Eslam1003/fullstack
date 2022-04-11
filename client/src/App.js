import React from 'react';
import Login from './compunint/Login';
import Home from './compunint/Home';

import { Routes, Route, Navigate } from 'react-router-dom';
import './style/style.css';
import Add from './compunint/Add';

sessionStorage.setItem('login', false);
function App() {
  const [auth, setAuth] = React.useState(false);
  React.useEffect(() => {
    setAuth(sessionStorage.getItem('login'));
  }, [1]);
  console.log(auth);
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route
          exact
          path='/home'
          element={auth ? <Home auth={auth} /> : <Navigate to='/' />}
        />
        <Route exact path='/add' element={<Add auth={auth} />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </div>
  );
}

export default App;

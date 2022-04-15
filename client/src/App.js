import Login from './compunint/Login';
import Home from './compunint/Home';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './style/style.css';
import Bils from './compunint/Bils';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/Bils/:id' element={<Bils />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import NaveBar from './NaveBar';
import Custmoer from './Custmoer';
import axios from 'axios';

function Home({ auth }) {
  const [data, setData] = React.useState([]);
  useEffect(() => {
    axios.get('/home').then((res) => {
      setData(res.data);
    });
  }, []);
  let cst = data.map((cst) => {
    return <Custmoer name={cst.name} cost={cst.cost} key={cst._id} />;
  });
  if (!auth) {
    return <Navigate to='/' replace />;
  }
  return (
    <div className='body--container'>
      <NaveBar />
      <div className='custmoer--contanier'>{cst}</div>
    </div>
  );
}

export default Home;

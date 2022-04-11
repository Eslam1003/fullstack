import React, { useEffect } from 'react';
import NaveBar from './NaveBar';
import Custmoer from './Custmoer';
import axios from 'axios';
import Add from './Add';
import { Link } from 'react-router-dom';

function Home() {
  let user = {
    name: '',
    cost: '',
  };
  const [getdata, setGetdata] = React.useState([]);
  const [data, setData] = React.useState(user);
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    axios.get('/home').then((res) => {
      setGetdata(res.data);
    });
  }, [getdata]);
  let cst = getdata.map((cst) => {
    return (
      <div>
        <Custmoer name={cst.name} cost={cst.cost} key={cst._id} />
        <div>
          <Link to='/Bils'>Bils</Link>
        </div>
      </div>
    );
  });
  function clickhandler() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }

  function submithandler(event) {
    event.preventDefault();
    axios.post('/add', data);
    setData(user);
    setShow(false);
  }

  return (
    <div className='body--container'>
      <NaveBar clickhandler={clickhandler} />
      <div>
        {show && (
          <Add submithandler={submithandler} setData={setData} data={data} />
        )}
      </div>
      <div className='custmoer--contanier'>{cst}</div>
    </div>
  );
}

export default Home;

import React from 'react';
import { Navigate } from 'react-router-dom';
import NaveBar from './NaveBar';
import axios from 'axios';

function Add({ auth }) {
  let user = {
    name: '',
    cost: '',
  };
  const [data, setData] = React.useState(user);
  function changehandler(event) {
    setData((prevalu) => {
      return {
        ...prevalu,
        [event.target.name]: event.target.value,
      };
    });
  }

  function submithandler(event) {
    event.preventDefault();
    axios.post('/add', data).then((res) => console.log(res));
    setData(user);
  }
  if (!auth) {
    return <Navigate to='/' />;
  } else {
    return (
      <div>
        <NaveBar />
        <div className='add--contanier'>
          <h5>Add New cust</h5>
          <form onSubmit={submithandler}>
            <input
              type='text'
              name='name'
              value={data.name}
              placeholder='Cst Name'
              onChange={changehandler}
            />
            <input
              type='text'
              name='cost'
              placeholder='total'
              value={data.cost}
              onChange={changehandler}
            />
            <button>save</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Add;

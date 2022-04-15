import React from 'react';
import { Link } from 'react-router-dom';

function Add(props) {
  function changehandler(event) {
    props.setData((prevalu) => {
      return {
        ...prevalu,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className='add--contanier'>
      <form onSubmit={props.submithandler}>
        <input
          type='text'
          name='name'
          value={props.data.name}
          placeholder='Cst Name'
          onChange={changehandler}
        />

        <button>add</button>
      </form>
    </div>
  );
}

export default Add;

import React from 'react';
import save from './../imgs/save.png';

const Add = (props) => {
  function changehandler(event) {
    const { name, value, type, checked } = event.target;
    return props.setAdd((prevalu) => {
      return {
        ...prevalu,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  return (
    <div>
      <form className='form--fild'>
        <label htmlFor='name'>Name</label>
        <input
          onChange={changehandler}
          className='cst--input'
          type='text'
          name='name'
          placeholder='name'
        />
        <label htmlFor='name'>cost</label>
        <input
          onChange={changehandler}
          className='cst--input'
          type='text'
          name='cost'
          placeholder='cost'
        />

        <div className='cst--add'>
          <button onClick={props.submit}>
            <img src={save} alt='' className='bills' />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;

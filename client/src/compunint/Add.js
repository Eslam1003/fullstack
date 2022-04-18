import React from 'react';
import img from './../imgs/plus.png';
import save from './../imgs/save.png';

const Add = (props) => {
  const [show, setShow] = React.useState(false);
  function changehandler(event) {
    return props.setAdd((prevalu) => {
      return {
        ...prevalu,
        [event.target.name]: event.target.value,
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
        {show && (
          <div>
            <div>
              <label htmlFor='name'>date</label>

              <input
                onChange={changehandler}
                className=''
                type='date'
                name='date'
                placeholder='cost'
              />
            </div>
            <div>
              <label htmlFor='item 1'>item 1</label>

              <input
                onChange={changehandler}
                className=''
                type='text'
                name='item'
                placeholder='item 1'
              />
            </div>
          </div>
        )}
        <div className='cst--add'>
          <button onClick={props.submit}>
            <img src={save} alt='' className='bills' />
          </button>
          <img
            onClick={() => {
              setShow(!show);
            }}
            src={img}
            alt='asdf'
            className='bills'
          />
        </div>
      </form>
    </div>
  );
};

export default Add;

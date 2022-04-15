import axios from 'axios';

import React, { useEffect, useState } from 'react';

import NaveBar from './NaveBar';

function Bils() {
  const [data, setData] = useState({});
  const [show, setShow] = React.useState(false);

  let url = window.location.href.slice(21);
  useEffect(() => {
    axios.get(url, { name: 'eslam' }).then((res) => setData(res.data));
  }, [1]);

  function clickhandler() {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  }
  function submit(e) {
    e.preventDefault();
    setShow(false);
  }
  return (
    <div className='body--container'>
      <h4 className='bills--name'>Name:{data.name}</h4>
      <NaveBar clickhandler={clickhandler} />
      {show && (
        <div className='form--container'>
          <form onSubmit={submit} className='form--fild'>
            <input type='text' name='' id='' placeholder='item 1' />
            <input type='text' name='' id='' placeholder='item 1' />
            <input type='text' name='' id='' placeholder='item 1' />
            <input type='text' name='' id='' placeholder='item 1' />
            <button>save</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Bils;

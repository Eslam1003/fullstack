import React from 'react';
function Bils(props) {
  return (
    <div className='bill-cont'>
      <div className='bills--container'>
        <p>Name</p>
        <p className='bills--name'>
          {props.billname ? props.billname.name : ''}
        </p>
        <span
          className='addNewBill'
          onClick={() => {
            props.setShow(!props.show);
          }}
        >
          Add New Bill
        </span>
      </div>

      <div className='bill--container'>{props.bils}</div>
    </div>
  );
}

export default Bils;

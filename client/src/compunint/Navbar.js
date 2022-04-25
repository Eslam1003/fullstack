import React from 'react';

const Navbar = (props) => {
  return (
    <div className='nav'>
      <ul className='nav--ul'>
        <li
          className='nave--home active'
          id='home'
          onClick={props.clickhandler}
        >
          Home
        </li>
        <li className='nave--bills' id='bills' onClick={props.clickhandler}>
          Bills
        </li>
        <li className='nave--add' id='add' onClick={props.clickhandler}>
          Add
        </li>
      </ul>
    </div>
  );
};

export default Navbar;

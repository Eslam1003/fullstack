import React from 'react';
import { Link } from 'react-router-dom';
import plus from './../imgs/plus.png';
import home from './../imgs/home.png';

function NaveBar(props) {
  return (
    <nav>
      <ul className='nav--ul'>
        <li>
          <Link to='/home'>
            <img className='nav--img link' src={home} alt='home' />
          </Link>
        </li>
        <li>
          <img
            className='nav--img link'
            onClick={props.clickhandler}
            src={plus}
            alt='add'
          />
        </li>
      </ul>
    </nav>
  );
}

export default NaveBar;

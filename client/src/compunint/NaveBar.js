import React from 'react';
import { Link } from 'react-router-dom';
import plus from './../imgs/plus.png';
import home from './../imgs/home.png';

function NaveBar() {
  return (
    <nav>
      <ul className='nav--ul'>
        <li>
          <Link to='/home'>
            <img className='nav--img link' src={home} alt='home' />
          </Link>
        </li>
        <li>
          <Link to='/add'>
            <img className='nav--img link' src={plus} alt='add' />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NaveBar;

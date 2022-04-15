import React from 'react';

function Custmoer(props) {
  const { name, hand } = props;
  return (
    <div className='custmoer'>
      <div className='custmoer--info'>
        <p>{name}</p>
      </div>
      <p onClick={hand} className='custmoer--brn'>
        +
      </p>
    </div>
  );
}

export default Custmoer;

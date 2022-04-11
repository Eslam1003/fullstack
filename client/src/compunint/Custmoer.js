import React from 'react';

function Custmoer(props) {
  const { name, cost } = props;
  return (
    <div className='custmoer'>
      <div className='custmoer--info'>
        <p>{name}</p>
        <p>{cost}</p>
      </div>
    </div>
  );
}

export default Custmoer;

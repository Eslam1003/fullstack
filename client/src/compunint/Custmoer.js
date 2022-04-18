import React from 'react';

function Custmoer(props) {
  const { name } = props.cst;
  return (
    <div className='custmoer'>
      <div className='custmoer--info'>
        <p>{name}</p>
      </div>
      <p className='custmoer--brn' onClick={() => props.bills(name)}>
        +
      </p>
    </div>
  );
}

export default Custmoer;

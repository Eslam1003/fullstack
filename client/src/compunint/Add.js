import React from 'react';

function Add(props) {
  function changehandler(event) {
    props.setData((prevalu) => {
      return {
        ...prevalu,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div>
      <div className='add--contanier'>
        <h5>Add New cust</h5>
        <form onSubmit={props.submithandler}>
          <input
            type='text'
            name='name'
            value={props.data.name}
            placeholder='Cst Name'
            onChange={changehandler}
          />
          <input
            type='text'
            name='cost'
            placeholder='total'
            value={props.data.cost}
            onChange={changehandler}
          />
          <button>save</button>
        </form>
      </div>
    </div>
  );
}

export default Add;

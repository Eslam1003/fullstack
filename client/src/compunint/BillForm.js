import React from 'react';

function BillForm(props) {
  function changehandler(event) {
    const { name, value, type, checked } = event.target;
    return props.setBill((prevalu) => {
      return {
        ...prevalu,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  return (
    <div className='form--container'>
      <form className='form'>
        <h5 className='form--heading'>Bill information</h5>
        <div className='form--items'>
          <label htmlFor='name'>Name :</label>
          <input type='text' value={props.billname.name} disabled />
        </div>
        <div className='form--items'>
          <label htmlFor='date'>Date :</label>
          <input
            value={props.bill.date}
            onChange={changehandler}
            className=''
            type='date'
            name='date'
            placeholder='cost'
          />
        </div>
        <div className='form--items'>
          <label htmlFor='item1'>item 1</label>
          <input
            value={props.bill.item1}
            onChange={changehandler}
            className=''
            type='text'
            name='item1'
            placeholder='item 1'
          />
        </div>
        <div className='form--items'>
          <label htmlFor='item2'>item 2</label>
          <input
            value={props.bill.item2}
            onChange={changehandler}
            className=''
            type='text'
            name='item2'
            placeholder='item 2'
          />
        </div>
        <div className='form--items'>
          <label htmlFor='item3'>item 3</label>
          <input
            value={props.bill.item3}
            onChange={changehandler}
            className=''
            type='text'
            name='item3'
            placeholder='item 3'
          />
        </div>
        <div className='form--items'>
          <label htmlFor='checkbox'>bayed</label>
          <input
            onChange={changehandler}
            className=''
            type='checkbox'
            name='check'
            checked={props.bill.check}
          />
        </div>
        {!props.edit ? (
          <button onClick={props.submitbils}>Save</button>
        ) : (
          <button onClick={props.editbils}>Edit</button>
        )}
        <button onClick={props.cansl}>Cansel</button>
        <button onClick={props.delet}>Delet</button>
      </form>
    </div>
  );
}

export default BillForm;

import axios from 'axios';
import React from 'react';

function Bils(props) {
  const [bills, setBills] = React.useState([]);
  console.log(bills);
  React.useEffect(() => {
    props.setBill((prevalu) => {
      return {
        ...prevalu,
        name: props.billname,
      };
    });
    axios
      .post('/getbills', { name: props.billname ? props.billname.name : '' })
      .then((res) => {
        setBills(res.data);
      });
  }, [props.show]);
  function changehandler(event) {
    const { name, value, type, checked } = event.target;
    return props.setBill((prevalu) => {
      return {
        ...prevalu,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }
  let bils = bills.map((bill) => {
    return (
      <div className='bill--cont' key={bill._id}>
        <p>{bill.date}</p>
        <p>{bill.item1}</p>
        <p>{bill.item2}</p>
        <p>{bill.item3}</p>
      </div>
    );
  });

  return (
    <div>
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

      {bils}
      {props.show && (
        <form>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' value={props.billname.name} disabled />
          </div>
          <div>
            <label htmlFor='date'>date</label>
            <input
              onChange={changehandler}
              className=''
              type='date'
              name='date'
              placeholder='cost'
            />
          </div>
          <div>
            <label htmlFor='item1'>item 1</label>
            <input
              onChange={changehandler}
              className=''
              type='text'
              name='item1'
              placeholder='item 1'
            />
          </div>
          <div>
            <label htmlFor='item2'>item 1</label>
            <input
              onChange={changehandler}
              className=''
              type='text'
              name='item2'
              placeholder='item 2'
            />
          </div>
          <div>
            <label htmlFor='item3'>item 1</label>
            <input
              onChange={changehandler}
              className=''
              type='text'
              name='item3'
              placeholder='item 3'
            />
          </div>
          <div>
            <label htmlFor='checkbox'>bayed</label>
            <input
              onChange={changehandler}
              className=''
              type='checkbox'
              name='check'
              checked={props.bill.check}
            />
          </div>
          <button onClick={props.submitbils}>Save</button>
          <button
            onClick={() => {
              props.setShow(false);
            }}
          >
            Cansel
          </button>
        </form>
      )}
    </div>
  );
}

export default Bils;

import React from 'react';
import Bils from './Bils';
import Custmoer from './Custmoer';
import Navbar from './Navbar';
import Add from './Add';
import axios from 'axios';
import BillForm from './BillForm';

function Home() {
  let billtemp = {
    name: '',
    date: '',
    item1: '',
    item2: '',
    item3: '',
    check: false,
  };
  const [edit, setEdit] = React.useState(false);
  const [cst, setCst] = React.useState([]);
  const [billname, setBillname] = React.useState('');
  const [show, setShow] = React.useState(false);
  const [comp, setComp] = React.useState({
    home: true,
    bills: false,
    add: false,
  });
  const [add, setAdd] = React.useState({
    name: '',
    cost: '',
  });
  const [bill, setBill] = React.useState(billtemp);
  const [billls, setBills] = React.useState([]);

  React.useEffect(() => {
    axios.get('/home').then((res) =>
      setCst((prevalu) => {
        return res.data;
      })
    );
  }, [comp]);
  React.useEffect(() => {
    setBill((prevalu) => {
      return {
        ...prevalu,
        name: billname,
      };
    });
    axios
      .post('/getbills', { name: billname ? billname.name : '' })
      .then((res) => {
        setBills(res.data);
      });
  }, [show, edit, comp]);

  let bils = billls
    .sort((a, b) => {
      return a.date < b.date;
    })
    .map((bill) => {
      return (
        <div
          className={bill.check ? 'bill--items bayed' : 'bill--items'}
          key={bill._id}
        >
          <div>
            <p>date: {bill.date}</p>
            <p>item1: {bill.item1}</p>
            <p>item2: {bill.item2}</p>
            <p>item3: {bill.item3}</p>
            <p> {bill.check ? 'تم الدفع' : 'لم يتم الدفع'}</p>
          </div>
          <div className='bill--edit'>
            <p
              onClick={() => {
                setShow(!show);
                setEdit(true);
                setBill(bill);
              }}
            >
              Edit
            </p>
          </div>
        </div>
      );
    });

  function clickhandler(e) {
    setEdit(false);
    setShow(false);
    document.getElementById(e.target.id).classList.toggle('active');
    return setComp((prevalu) => {
      return {
        [e.target.id]: true,
      };
    });
  }
  function bills(name) {
    setComp({
      home: false,
      bills: true,
      add: false,
    });
    setBillname(name);
    setBill(billtemp);
    setEdit(false);
    setShow(false);
  }

  let custmor = cst.map((cst) => {
    return <Custmoer key={cst._id} cst={cst} bills={bills} />;
  });
  function submit(event) {
    event.preventDefault();
    axios.post('/add', add);
    setComp({
      home: true,
      bills: false,
      add: false,
    });
    setEdit(false);
  }
  function submitbils(event) {
    event.preventDefault();
    axios.post('/Bills', bill);
    setShow(false);
    setEdit(false);
  }
  function editbils(event) {
    event.preventDefault();
    axios.post('/edit', bill);
    setShow(false);
    setEdit(false);
  }
  function delet(event) {
    event.preventDefault();
    axios.post('/delet', bill);
    setShow(false);
    setEdit(false);
  }

  return (
    <div className='body--container'>
      <Navbar clickhandler={clickhandler} comp={comp} />
      <div className='custmoer--contanier'>
        {comp.home && custmor}
        {comp.bills && (
          <Bils
            billname={billname}
            submitbils={submitbils}
            show={show}
            setShow={setShow}
            bill={bill}
            setBill={setBill}
            bils={bils}
          />
        )}
        {comp.bills && show && (
          <BillForm
            submitbils={submitbils}
            bill={bill}
            setBill={setBill}
            billname={billname}
            show={show}
            setShow={setShow}
            edit={edit}
            setEdit={setEdit}
            editbils={editbils}
            delet={delet}
          />
        )}
        {comp.add && <Add submit={submit} setAdd={setAdd} add={add} />}
      </div>
    </div>
  );
}
export default Home;

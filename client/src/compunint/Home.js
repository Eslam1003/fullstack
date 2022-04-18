import React from 'react';
import Bils from './Bils';
import Custmoer from './Custmoer';
import Navbar from './Navbar';
import Add from './Add';
import axios from 'axios';

function Home() {
  const [cst, setCst] = React.useState([]);
  const [billname, setBillname] = React.useState();
  const [comp, setComp] = React.useState({
    home: true,
    bills: false,
    add: false,
  });
  const [add, setAdd] = React.useState({
    name: '',
    cost: '',
    date: '',
    item: '',
  });

  React.useEffect(() => {
    axios.get('/home').then((res) =>
      setCst((prevalu) => {
        return res.data;
      })
    );
  }, [comp]);

  function clickhandler(e) {
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
  }

  let custmor = cst.map((cst) => {
    return <Custmoer key={cst._id} cst={cst} bills={bills} />;
  });
  function submit(event) {
    event.preventDefault();
    axios.post('/add', add);
  }

  return (
    <div className='body--container'>
      <Navbar clickhandler={clickhandler} comp={comp} />
      <div className='custmoer--contanier'>
        {comp.home && custmor}
        {comp.bills && <Bils billname={billname} />}
        {comp.add && <Add submit={submit} setAdd={setAdd} add={add} />}
      </div>
    </div>
  );
}
export default Home;

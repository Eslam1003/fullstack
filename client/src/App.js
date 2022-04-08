import React from 'react';
import Login from './compunint/Login';
import Home from './compunint/Home';
import './style/style.css';
function App() {
  const userProto = {
    userName: '',
    password: '',
  };
  const [data, setData] = React.useState({});
  const [success, setSuccess] = React.useState(false);
  const [user, setUser] = React.useState(userProto);

  // fetch data from api
  React.useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  //Take input from Form
  function changehandler(event) {
    return setUser((olduser) => {
      return {
        ...olduser,
        [event.target.name]: event.target.value,
      };
    });
  }
  function submithandler(event) {
    event.preventDefault();
    if (data.userName === user.userName && data.password === user.password) {
      setSuccess(true);
    } else {
      setSuccess(false);
      setUser(userProto);
    }
  }
  console.log(success);

  return (
    <div className='App'>
      {!success ? (
        <Login
          user={user}
          changehandler={changehandler}
          submithandler={submithandler}
        />
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;

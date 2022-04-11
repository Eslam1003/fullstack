import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
function Login() {
  const userProto = {
    userName: '',
    password: '',
  };
  const [data, setData] = React.useState();
  const [user, setUser] = React.useState(userProto);

  // fetch data from api
  React.useEffect(() => {
    axios.get('/login').then((res) => setData(res.data));
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
  const navigate = useNavigate();
  function submithandler(event) {
    event.preventDefault();
    if (data.userName === user.userName && data.password === user.password) {
      navigate('/home');
    } else {
      sessionStorage.setItem('login', false);

      setUser(userProto);
    }
  }

  return (
    <div className='login--contanier'>
      <form className='login--form' onSubmit={submithandler}>
        <input
          className='login--input'
          type='text'
          name='userName'
          id='userName'
          value={user.userName}
          onChange={changehandler}
          placeholder='UserName'
        />
        <input
          className='login--input'
          placeholder='Password'
          type='password'
          name='password'
          id='password'
          onChange={changehandler}
          value={user.password}
        />
        <button className='login--btn'>Log in</button>
      </form>
    </div>
  );
}

export default Login;

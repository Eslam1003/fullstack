import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Login() {
  let user = {
    userName: '',
    password: '',
  };
  const [sucsess, setsucsess] = useState(false);
  const [userlogin, setUserlogin] = useState(user);
  function changhandler(e) {
    setUserlogin((prevalu) => {
      return {
        ...prevalu,
        [e.target.name]: e.target.value,
      };
    });
  }
  useEffect(() => {
    axios.post('/login', userlogin).then((res) => setsucsess(res.data));
  }, [userlogin]);
  sessionStorage.setItem('login', sucsess);

  return (
    <div className='login--contanier'>
      <form className='login--form'>
        <input
          className='login--input'
          type='text'
          name='userName'
          onChange={changhandler}
          id='userName'
          placeholder='UserName'
        />
        <input
          className='login--input'
          placeholder='Password'
          type='password'
          name='password'
          id='password'
          onChange={changhandler}
        />
        <button className='login--btn'>Log in</button>
      </form>
    </div>
  );
}

export default Login;

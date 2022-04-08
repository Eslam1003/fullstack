import React from 'react';

function login(props) {
  const { userName, password } = props.user;
  return (
    <div className='login--contanier'>
      <form className='login--form' onSubmit={props.submithandler}>
        <input
          type='text'
          name='userName'
          id='userName'
          value={userName}
          onChange={props.changehandler}
          placeholder='UserName'
        />

        <input
          placeholder='Password'
          type='password'
          name='password'
          id='password'
          onChange={props.changehandler}
          value={password}
        />
        <button className='login--btn'>Log in</button>
      </form>
    </div>
  );
}

export default login;

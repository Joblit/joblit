import React from 'react';

function Login() {
  return (
    <div>
      <form>
        <h3>Login</h3>
        <label htmlFor='userName'>UserName: </label>
        <input type='text' id='userName' name='username' required></input>
        <label htmlFor='password'>Password: </label>
        <input type='password' id='password' name='password' required></input>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;

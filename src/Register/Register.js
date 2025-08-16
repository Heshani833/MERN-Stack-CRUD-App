import React from 'react'

const Register = () => {
  return (
    <div>
      <nav />
      <h1>User Register</h1>
      <form>
        <label>Name</label>
        <br />
        <br />
        <input type="text" name="name" required></input>
        <br />
        <br />
        <br />
        <label>Gmail</label>
        <br />
        <br />
        <input type="text" name="gmail" required></input>
        <br />
        <br />
        <br />
        <label>Password</label>
        <br />
        <br />
        <input type="password" name="password" required></input>
        <br />
        <br />
        <br />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register
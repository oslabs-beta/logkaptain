import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop, Container } from './Backdrop';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email);
  };


  return (
    <>
      <Backdrop>
        <form onSubmit={handleSubmit}> 
          <label htmlFor ='email'>email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="youremail@gmail.com" id='email' name='email'/>
          <label htmlFor ='pasword'>password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**********" id='password' name='password'/>
          <button type="submit">Login</button>
        </form>
        <span>Don't have an account? Register</span>
          <Link to="/signup"> here.</Link>
      </Backdrop>
    </>
    
  );
};
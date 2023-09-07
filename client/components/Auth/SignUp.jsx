import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop, Container } from './Backdrop';

export const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  
  const setInput = (fieldName, event) => {
    const value = event.target.value;
    switch (fieldName) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'name':
        setName(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email);
  };

  return (
    <Container>
      <Backdrop>
        <form onSubmit={handleSubmit}> 
        <label htmlFor='name'>Full Name</label>
        <input value={name} onChange={(e) => setInput('name', e)} name='name' id='name' placeholder='full name'/>
        <label htmlFor ='email'>email</label>
        <input value={email} onChange={(e) => setInput('email', e)} type="text" placeholder="youremail@gmail.com" id='email' name='email'/>
        <label htmlFor ='pasword'>password</label>
        <input value={password} onChange={(e) => setInput('password', e)} type="password" placeholder="**********" id='password' name='password'/>
        <button type="submit">Sign Up</button>
      </form>
      <Link to="/">Already have an account? Login here.</Link>
      </Backdrop>
    </Container>
    
    
  );
};
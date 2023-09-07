import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop, Container, Form, Input } from './Backdrop';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email);
  };


  return (
    <Container>
      <Backdrop>
        <Form onSubmit={handleSubmit}> 
          <Input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="jane.doe@example.com" id='email' name='email'/>
          <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**********" id='password' name='password'/>
            <button type="submit">Login</button>
          
            <span>Don't have an account? </span>
          <Link to="/signup"> Register here.</Link>
        </Form>
      </Backdrop>
    </Container>
    
  );
};
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop, BrandedHeader, Button, Container, Form, Input } from './Backdrop';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const setInput = (fieldName, event) => {
    const value = event.target.value;
    switch (fieldName) {
      case 'username':
        setUsername(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }) //TODO: what should i pass in here?
    });
    const data = await response.json();
    if (data.err) {
        setError(data.err);//TODO: ask what's the name of the error handler
    } else {
        setIsLogin(true);
    }
  };


  return (
    <Container>
      <Backdrop>
      <BrandedHeader>LogKaptain</BrandedHeader>
        <Form onSubmit={handleSubmit}> 
          <Input value={username} onChange={(e) => setInput('username', e)} type="text" placeholder="janedoe" id='username' name='username'/>
          <Input value={password} onChange={(e) => setInput('password', e)} type="password" placeholder="**********" id='password' name='password'/>
          <Button type="submit" variant='primary'>Login</Button>
          <span>Don't have an account? </span>
          <Link to="/signup"> Register here.</Link>
        </Form>
      </Backdrop>
    </Container>
    
  );
};
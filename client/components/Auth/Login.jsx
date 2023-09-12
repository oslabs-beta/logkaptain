import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop, BrandedHeader, Button, Container, Form, Input } from './Backdrop';

//create useState for username and password and pass and empty string
export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //the setInput function will update the state of the username and password input
  const setInput = (fieldName, event) => {
    //this listens to the event and sets the value (current value) to the event.target.value
    const value = event.target.value;
    //switch statement to set the value of the field name
    //update the state of the username and password with the current value
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
  //function to handle submit for the post request
  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ carobonita: 12345 }) //TODO: what should i pass in here?
    });
    const data = await response.json();
    if (data.err) { //has to match what's on the server side
        setError(data.err);//TODO: ask what's the name of the error handler
    } else {
        setIsLogin(true);
    }
  };

  //render the login form, which has input fields for username and password
  //if the user doesn't have an account, they can click on the link to register
  //the Link router is how we connect to other components in App.jsx
  
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
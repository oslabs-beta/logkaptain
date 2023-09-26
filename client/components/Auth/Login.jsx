import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Backdrop, BrandedHeader, Button, Container, Form, Input, ErrorMessage } from './Backdrop';
import Cookies from 'js-cookie';

//create useState for username and password and pass and empty string
export const Login = () => {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
    //const response = await fetch(`http://localhost:3000/user/login`, {
    const response = await fetch(`https://log-kaptain-d63e4fff3d60.herokuapp.com/user/login`, {

      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username: username, password: password }), 
    });
    const data = await response.json();
    if (data.verify === false) { 
      setError(data.message);
    } else {
      navigate('/dashboard');
    }
  };

  //render the login form, which has input fields for username and password
  //if the user doesn't have an account, they can click on the link to register
  //the Link router is how we connect to other components in App.jsx
  
  return (
    <Container>
      <Backdrop>
      <BrandedHeader>LOGKAPTAIN</BrandedHeader>
        <Form onSubmit={handleSubmit}> 
          <Input value={username} onChange={(e) => setInput('username', e)} type="text" placeholder="janedoe" id='username' name='username'/>
          <Input value={password} onChange={(e) => setInput('password', e)} type="password" placeholder="**********" id='password' name='password'/>
          {error && <ErrorMessage><span>{error}, check your username and password.</span></ErrorMessage>}
          <Button type="submit" variant='primary'>Login</Button>
          <span>Don't have an account? </span>
          <Link to="/signup"> Register here.</Link>
        </Form>
      </Backdrop>
    </Container>
    
  );
};
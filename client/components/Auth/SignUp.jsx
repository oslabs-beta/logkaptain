import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Backdrop, BrandedHeader, Button, Container, ErrorMessage, Form, Input } from './Backdrop';


//create useState for name, email, password and pass and empty string
export const SignUp = () => {
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  
  //create a function that takes in a field name and event
  //set the value to the event.target.value
  //switch statement to set the value of the field name
  const setInput = (fieldName, event) => {
    const value = event.target.value;
    switch (fieldName) {
      case 'username':
        setUsername(value);
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

  //function to handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()    
    const response = await fetch('http://localhost:3000/user/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password, name }) 
    });
    const data = await response.json();
    if (data.err) {
        setError(data.err); 
    } else {
      navigate('/dashboard');
    }
  }

  //render the signup form, which has input fields for name, username and password
  //if the user already has an account, they can click on the link to login
  return (
    <Container>
      <Backdrop>
      <BrandedHeader>LogKaptain</BrandedHeader>
        <Form onSubmit={handleSubmit}> 
        <Input value={name} onChange={(e) => setInput('name', e)} name='name' id='name' placeholder='Jane Doe'/>
        <Input value={username} onChange={(e) => setInput('username', e)} type="text" placeholder="janedoe" id='username' name='username'/>
        <Input value={password} onChange={(e) => setInput('password', e)} type="password" placeholder="**********" id='password' name='password'/>
        {error && <ErrorMessage><span>{error}, check your username and password.</span></ErrorMessage>}
        <Button type="submit" variant='primary'>Sign Up</Button>
        <span>Already have an account?</span>
          <Link to="/">Login here</Link>
        </Form>
      </Backdrop>
    </Container> 
  );
};
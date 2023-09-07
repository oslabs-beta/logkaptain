import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop, BrandedHeader, Button, Container, ErrorMessage, Form, Input } from './Backdrop';


//create useState for name, email, password and pass and empty string
export const SignUp = () => {
  const [error, setError] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  
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
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, username, password }) // TODO: what should i pass in here?
    });
    const data = await response.json();
    if (data.err) {
        setError(data.err); // TODO: ask what's the name of the error handler
    } else {
        setIsLogin(true);
    }
  }

  return (
    <Container>
      <Backdrop>
      <BrandedHeader>LogKaptain</BrandedHeader>
      {error && <ErrorMessage><span>{error}, check your username and password.</span></ErrorMessage>}
        <Form onSubmit={handleSubmit}> 
        <Input value={name} onChange={(e) => setInput('name', e)} name='name' id='name' placeholder='Jane Doe'/>
        <Input value={username} onChange={(e) => setInput('username', e)} type="text" placeholder="janedoe" id='username' name='username'/>
        <Input value={password} onChange={(e) => setInput('password', e)} type="password" placeholder="**********" id='password' name='password'/>
        <Button type="submit" variant='primary'>Sign Up</Button>
        <span>Already have an account?</span>
          <Link to="/">Login here</Link>
        </Form>
      </Backdrop>
    </Container> 
  );
};
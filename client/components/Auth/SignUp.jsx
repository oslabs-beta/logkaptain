import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Backdrop, BrandedHeader, Button, Container, Form, Input } from './Backdrop';


//create useState for name, email, password and 
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
      <BrandedHeader>LogKaptain</BrandedHeader>
        <Form onSubmit={handleSubmit}> 
        <Input value={name} onChange={(e) => setInput('name', e)} name='name' id='name' placeholder='Jane Doe'/>
        <Input value={email} onChange={(e) => setInput('email', e)} type="text" placeholder="jane.doe@example.com" id='email' name='email'/>
        <Input value={password} onChange={(e) => setInput('password', e)} type="password" placeholder="**********" id='password' name='password'/>
        <Button type="submit" variant='primary'>Sign Up</Button>
        <span>Already have an account?</span>
          <Link to="/">Login here</Link>
        </Form>
      </Backdrop>
    </Container>
    
    
  );
};
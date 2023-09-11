/**
 * @jest-environment jsdom
 */

import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import { App } from '../client/App';
import { Login } from '../client/components/Auth/Login';
import { SignUp } from '../client/components/Auth/SignUp';
import { Dashboard } from '../client/containers/Dash/Dashboard';
import { BrowserRouter } from 'react-router-dom';

describe('Testing React Components', () => {

  describe('Testing Login Components', () => {
    beforeAll(() => {
      render(
        <Router> 
          <Login />
        </Router>
      )
    })

    it('should render the login screen', () => {
      expect(screen.getByText('Register here.')).toBeInTheDocument();
    })
  })
  
  describe('Testing Signup Components', () => {
    beforeAll(() => {
      render(
        <Router> 
          <SignUp />
        </Router>
      )
    })

    it('should render the signup page', () => {
      expect(screen.getByText('Sign Up')).toBeInTheDocument();
    })
  })

  // will have to reconsider how to test/show this one; 
  xdescribe('Testing Dashboard Components', () => {
    beforeAll(() => {
      render(
        <Router> 
          <Dashboard />
        </Router>
      )
    })

    it('should render the dashboard screen', () => {
      expect(screen.getByText('Register here.')).toBeInTheDocument();
    })
  })
});
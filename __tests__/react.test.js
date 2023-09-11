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
import NavBar from '../client/containers/Dash/NavBar';

describe('Testing React Components', () => {

  describe('Testing Login Components', () => {
    beforeAll(() => {
      render(
        <Router> 
          <Login />
        </Router>
      )
    });

    it('should render the login screen', () => {
      expect(screen.getByText('Register here.')).toBeInTheDocument();
    });

    xit('should successfully login' , () => {

    });

    xit('should fail at logging in', () => {

    });
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
  describe('Testing Dashboard Components', () => {
    describe('Testing Nav Bar', () => {
      beforeAll (() => {
        render (
          <Router> 
            <NavBar /> 
          </Router> 
        )
      })

      it('should contain dashnav', () => {
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
      });

      it('should contain teamnav', () => {
        expect(screen.getByText('Team')).toBeInTheDocument();
      });

      it('should contain settingnav', () => {

      });

      it('should contain logoutnav', () => {

      });
    })

    describe('Testing LogCard', () => {
      it('should contain Log Data header', () => {

      })

      it('should allow for connecting pods', () => {

      })
    })
  })
});
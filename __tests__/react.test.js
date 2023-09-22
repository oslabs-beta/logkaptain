/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom'
import { Login } from '../client/components/Auth/Login';
import { SignUp } from '../client/components/Auth/SignUp';
import LogCard from '../client/components/Dash/LogCard';
import NavBar from '../client/components/Dash/NavBar';

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
      beforeEach (() => {
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
        expect(screen.getByText('Settings')).toBeInTheDocument();
      });

      it('should contain logoutnav', () => {
        expect(screen.getByText('Logout')).toBeInTheDocument();
      });
    })

    xdescribe('Testing Log Card', () => {

      const logs = [{date: Date.now, pod: 'testing', message: 'this is a test'}]
      beforeAll(() => {
        render( 
          <Router> 
            <LogCard />
          </Router>
        )
      })
      
      it('should contain Log Data header', () => {
        expect(screen.getByText('Log Data')).toBeInTheDocument();
      })

      xit('should allow for connecting pods', () => {

      })

      it('should have a location to log data', () => {
        expect(screen.getByText('Message')).toBeInTheDocument();
      })
    })
  })
});
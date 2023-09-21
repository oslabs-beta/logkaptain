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

	// renders the login components
  describe('Testing Login Components', () => {
    beforeAll(() => {
      render(
        <Router> 
          <Login />
        </Router>
      )
    });

		// tests to see if the text 'Register here' which is part of the login screen is rendered
    it('should render the login screen', () => {
      expect(screen.getByText('Register here.')).toBeInTheDocument();
    });

		// tests to see if we login and reroute to /dashboard
		// TODO:
    xit('should successfully login' , () => {

    });

		// tests to see if we fail at logging in 
		// TODO:
    xit('should fail at logging in', () => {

    });
  })
  
  describe('Testing Signup Components', () => {
		// renders the sign up page/component
    beforeAll(() => {
      render(
        <Router> 
          <SignUp />
        </Router>
      )
    })

		// tests to see if the text 'Sign Up' which is part of the signup page is rendered
    it('should render the signup page', () => {
      expect(screen.getByText('Sign Up')).toBeInTheDocument();
    })
  })

 
  describe('Testing Dashboard Components', () => {
	//renders nav bar
		describe('Testing Nav Bar', () => {
      beforeEach (() => {
        render (
          <Router> 
            <NavBar /> 
          </Router> 
        )
      })

			// checks to see if texts are rendered ('Dashboard')
      it('should contain dashnav', () => {
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
      });

			// tests to see if 'Team' is rendered
      it('should contain teamnav', () => {
        expect(screen.getByText('Team')).toBeInTheDocument();
      });

			// tests to see if 'Settings' is rendered
      it('should contain settingnav', () => {
        expect(screen.getByText('Settings')).toBeInTheDocument();
      });

			// tests to see if 'logout is rendered' 
      it('should contain logoutnav', () => {
        expect(screen.getByText('logout')).toBeInTheDocument();
      });
    })

		// currently not working
    xdescribe('Testing Log Card', () => {

			// renders the log cards 
      const logs = [{date: Date.now, pod: 'testing', message: 'this is a test'}]
      beforeAll(() => {
        render( 
          <Router> 
            <LogCard />
          </Router>
        )
      })
      
			// tests to see if the log panel is functioning
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

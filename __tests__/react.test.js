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
import { BrowserRouter } from 'react-router-dom';

describe('Testing React Components', () => {

  /** Currently deprecated; Does not work */
  xit('should render the app correctly', () => { 
    const { getByText } = render(<App />);
    expect(screen.getByText('Vite + React')).toBeInTheDocument(); 
  })

  it('should render the login screen', () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getByText('Register here.')).toBeInTheDocument(); 
  })
});
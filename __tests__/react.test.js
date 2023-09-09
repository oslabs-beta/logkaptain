/**
 * @jest-environment jsdom
 */

import React from 'React';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../client/App'

describe('Testing React Components', () => {

  // let app;
  // beforeAll(() => {
  //   render(<App />);
  // });

  it('should render the app correctly', () => { //currently tests for base App not the new app. 
    const { getByText } = render(<App />)
    expect(screen.getByText('Vite + React')).toBeInTheDocument(); 
  })
});
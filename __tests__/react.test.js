import React from 'React';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
// import App from '../client/App'

xdescribe('Testing React Components', () => {

  let app;
  beforeAll(() => {
    // render(<App />);
  });

  xit('should render the app correctly', () => { //currently tests for base App not the new app. 
    expect(screen.getByText('Vite + React')).toBeInTheDocument(); 
  })
});
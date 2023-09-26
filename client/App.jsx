import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './components/Auth/Login.jsx';
import { SignUp } from './components/Auth/SignUp.jsx';
import Dashboard from './components/Dash/Dashboard.jsx';
import Contact from './components/Dash/Contact.jsx';
import SplashPage from './components/Splash/Splash.jsx';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <SplashPage /> },
    // { path: '/login', element: <Login /> },
    { path: '/signup', element: <SignUp /> },
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/team', element: <Dashboard /> },
    { path: '/settings', element: <Dashboard /> },
    { path: '/contact', element: <Contact /> }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
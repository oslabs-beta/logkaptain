import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Login } from './components/Auth/Login.jsx'
import { SignUp } from './components/Auth/SignUp.jsx'
import Dashboard from './containers/Dash/Dashboard.jsx'


const App = () => {
  const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

return (
  <RouterProvider router={router} />
)

}

export default App
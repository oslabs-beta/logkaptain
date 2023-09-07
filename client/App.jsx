import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Login} from './components/Auth/Login.jsx'
import {SignUp} from './components/Auth/SignUp.jsx'


const App = () => {
  const router = createBrowserRouter([
  { path: '/', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
]);
  

  return (
      <RouterProvider router={router} />
    )

}



export default App

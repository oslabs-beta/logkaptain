import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './ReferenceFiles/App.css'

// IMPORT CONTAINER FILES HERE
import Dashboard from './containers/Dash/Dashboard';

const App = () => {
  const [count, setCount] = useState(0) // THIS IS JUST FOR TESTING (THE VITE SETUP)

  const router = createBrowserRouter([
    {
      path: '/dashboard',
      element: <Dashboard />,
    },

    {
      path: '/', // RIGHT NOW THIS IS JUST FOR FE TESTING/KNOWLEDGE (USING THE SETUP FOR THIS PAGE AS CSS GUIDANCE)
      element:     
      <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>client/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>,
    },

    ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};


/* List of FE Routes:
  //     {
//       path: '/Login',
//       element: <LogIn />,
//     },
//     {
//       path: '/SignUp',
//       element: <SignUp />,
//     },
//     {
//       path: '/PodConnect',
//       element: <SignUp />,
//     },
*/



export default App
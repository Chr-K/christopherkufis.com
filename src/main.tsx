import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root';
import Home from './routes/home';
import About from './routes/about';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[{
      path:'/',
      element: <Home/>,
    },
    {
      path:'about',
      element:<About></About>
    },],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

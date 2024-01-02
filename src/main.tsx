import './styles/index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './routes/root';
import Home from './routes/home';
import About from './routes/about';
import Article from './components/Article';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

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
    },
    {
      path:'/article/:ID',
      element:<Article></Article>,
      loader:async (req)=>{
        let data = JSON.stringify(req.params.ID)
        console.log(data)
        return await fetch(`https://api.christopherkufis.com/article/`,
        {
          method:"POST",
          body:data,
          headers:{
            'Content-Type':'application/json'
          }
          
        }
        )
      }
    },
  ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

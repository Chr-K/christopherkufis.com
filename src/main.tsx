import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root'
import ErrorPage from './error_page'
import { Home, Projects,Appointments,Request_appointment,Login} from './routes/Components/Pages/Pages_barrel'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path:"/",
  element:<Root/>,
  errorElement:<ErrorPage></ErrorPage>,
  children:[{
    path:"",
    element:<Home></Home>,
  },
  {
    path:"/projects",
    element:<Projects></Projects>
  },
  {
    path:"/appointments",
    element:<Appointments></Appointments>
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:'/appointments/request_appointment',
    element:<Request_appointment></Request_appointment>

  }
]
}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { Provider } from 'react-redux'
// import { store } from "./store/store.js";
import Home from './components/Home.jsx'
import Login from  './components/Login.jsx'
import Inbox from './components/Inbox.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home  />
      },
      {
        path:"/inbox",
        element:<Inbox/>
      },
      
      {
        path: "/login",
        element: (
            <Login />
        )
      },
    ]
   }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
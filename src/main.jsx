import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AddMovie from './components/addMovie.jsx';
import ViewMovie from './components/viewMovie.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/add",
    element: <AddMovie/>,
  },{
    path: "/view/:id",
    element: <ViewMovie/>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(

   <RouterProvider router={router} />

)

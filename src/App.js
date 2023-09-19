import './App.css';
import React from 'react';
import Khabar from './components/Khabar';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const  App =()=> {

    const router = createBrowserRouter(
      [
        {
          path:"/",
          element:<Khabar pageSize={5} category="general"/>,
          // loader:<Khabar pageSize={5} category="general"/>,
          
        },
        {
          path:"entertainment",
          element:<Khabar pageSize={5} category="entertainment"/>
        },
        {
          path:"bussiness",
          element:<Khabar pageSize={5} category="bussiness"/>
        },
        {
          path:"health",
          element:<Khabar pageSize={5} category="health"/>
        },
        {
          path:"science",
          element:<Khabar pageSize={5} category="science"/>
        },
        {
          path:"cars",
          element:<Khabar pageSize={5} category="cars"/>
        }
      ]
    )
    return (
    <>
      
      <RouterProvider router={router} />
      
    </>
    
    )
  
}
export default App
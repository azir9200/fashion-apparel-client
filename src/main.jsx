import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routers from './Routes/Routes.jsx'
import Provider from './Providers/Provider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={routers}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import route from './Router/route.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider> <RouterProvider router={route}></RouterProvider></AuthProvider>
  <ToastContainer />
  </React.StrictMode>,
)

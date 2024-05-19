import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import './index.css'
import NavBar from '../comp/NavBar.jsx'
import ErrorPage from '../comp/ErrorPage'
import About from '../pages/About'
import App from './App'
import Product from '../pages/Product'
import HomePage from '../pages/HomePage'
import ProductDemo from '../pages/ProductDemo'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/products",
        element: <Product />
      },
      {
        path: "product/:res",
        element: <ProductDemo />
      }

    ],
    errorElement: <ErrorPage />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
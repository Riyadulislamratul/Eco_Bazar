import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './components/MainLayout';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import SignInPage from './pages/SignInPage';
import AboutPage from './pages/AboutPage';
import Shop from './pages/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/signin",
        element: <SignInPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      }
    ]
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
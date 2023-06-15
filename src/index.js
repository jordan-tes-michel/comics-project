import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {theme} from "./_theme";
import {CssBaseline, ThemeProvider, Typography} from "@mui/material";
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Containers/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "/",
        loader: () => redirect("/home")
      },
      {
        path: "/home",
        element: <Home/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline/>
    <RouterProvider router={router}/>
  </ThemeProvider>
);

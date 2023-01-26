import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Detail from './components/Detail';
import LoginPage from './components/LoginPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // children:[
    //   {
    //     path:'detail/:id',
    //     element:<Detail />
    //   }
    // ]
  },
  {
    path: 'detail/:id',
    element: <Detail />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

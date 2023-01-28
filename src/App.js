import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import LoginPage from './components/LoginPage';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
        </Route>
        <Route path='/login' element={<LoginPage></LoginPage>}>
        </Route>
        <Route path='/Detail/:id' element={<Detail></Detail>}>
        </Route>
      </Routes>
      {/* <RouterProvider router={router} /> */}
      {/* <Header></Header> */}

    </div>
  );
}

export default App;

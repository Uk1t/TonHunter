import React from 'react';
import './Global.css';
import { Route, Routes, Link } from 'react-router-dom';
import SecondPage from './pages/SecondPage';
import MainPage from './pages/MainPage';
import { Header } from './components/Header';






function App() {

  return (
    <>
      <Header />




      <Routes>
        <Route path='/SecondPage' element={<SecondPage />}></Route>
        <Route path='/' element={<MainPage />}></Route>
      </Routes>




    </>
  );
 
} 



export default App;

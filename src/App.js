
import './App.css';
import Footer from './components/Footer';

import { Icon } from '@iconify/react'

import MainPage from './pages'
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import Project3 from './pages/project3';
import Project4 from './pages/project4';
import Project5 from './pages/project5';

import { Router, Route, Routes } from "react-router-dom"

const App = () => {

  return (

    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/project1' element={<Project1 />} />
        <Route path='/project2' element={<Project2 />} />
        <Route path='/project3' element={<Project3 />} />
        <Route path='/project4' element={<Project4 />} />
        <Route path='/project5' element={<Project5 />} />
      </Routes>

      <Footer />
    </>




  )
}

export default App;

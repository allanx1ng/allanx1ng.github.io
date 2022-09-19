
import './App.css';

import Header from './components/Header'
import Projects from "./components/Projects"
import About from './components/About'
import Particles from './components/Particles';
import ScrollButton from './components/ScrollButton'
import Socials from './components/Socials'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer';

import { Icon } from '@iconify/react'

import Main from './components/Main';

import MainPage from './pages'
import Project1 from './pages/project1';
import Project2 from './pages/project2';
import Project3 from './pages/project3';

import { Router, Route, Routes } from "react-router-dom"
import { render } from '@testing-library/react';

const App = () => {

  return (

    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/project1' element={<Project1 />} />
        <Route path='/project2' element={<Project2 />} />
        <Route path='/project3' element={<Project3 />} />
      </Routes>

      <Footer />
    </>




  )
}

export default App;

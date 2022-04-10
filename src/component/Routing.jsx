import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './Content/Pages/About';
import Contact from './Content/Pages/Contact';
import Education from './Content/Pages/Education';
import Home from './Content/Pages/Home';
import Project from './Content/Pages/Project';
import SideBar from './SideBar/SideBar';


export default function Routing() {
  return (
    <>
      <BrowserRouter>
        <div style={{ display: "flex" }}>
          <SideBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/education' element={<Education />} />
            <Route path='/project' element={<Project />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}
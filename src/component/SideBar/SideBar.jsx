import React from 'react'
import "../SideBar/SideBar.css"
import sanjeev from '../../image/sanjeev.jpeg'
import { NavLink } from 'react-router-dom'

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className='main'>
                <div className='sidebar-pic'><img src={sanjeev} alt="" /></div>
           <div className='sidebar-heading'><h2>Sanjeev Maurya</h2></div>
              <div className='sidebar-para'><p> Front End Developer </p></div>
                <NavLink to="/">
               <div className='sidebar-home'><button className='btn-home'>Home</button></div>
               </NavLink>
               <NavLink to="/about">
               <div className='sidebar-about'><button className='btn-about'>About</button></div>
               </NavLink>
               <NavLink to="/education">
               <div className='sidebar-education'><button className='btn-education'>Education</button></div>
               </NavLink>
               <NavLink to="/project">
               <div className='sidebar-project'><button className='btn-project'>Project</button></div>
               </NavLink>
               <NavLink to="/contact">
               <div className='sidebar-contact'><button className='btn-contact'>Contact</button></div>
               </NavLink>
               </div>

        </div>
    )
}

import React from 'react'
import "../content.css"
// import download from '../../../image/download.png'
import { FaDownload } from 'react-icons/fa';
// import pdf from "../../../image/sanjeev.pdf"
// import { NavLink } from 'react-router-dom';
export default function About() {
  return (
    <div className='content-about'>
      <div className='about-head'><h3><span> About </span> me</h3> </div>
      <div><hr/></div>
      <div className='d-flex justify-between m-30'>
        <div>
      <div className='about-name'>Name : <span>Sanjeev Maurya</span></div>
      <div className='about-age'>Age : <span>20</span></div>
      <div className='about-Qualification'>Qualification : <span>B.Tech</span></div>
      <div className='about-post'>Post : <span>Front End Developer</span></div>
      <div className='about-language'>Language : <span>Hindi</span></div>
     <button className='btn-download' > Download CV <FaDownload className='bg-2b2727'/></button>
      </div>
      <div className='main-about-box'>
       <div className='about-boxe1'>
         <div className='d-flex'>
           <div className='box1'>
            <h2 className='month'> 3 </h2>
            <h2 className='experience'> Month<br /><span>Experiance</span></h2>

           </div>
           <div className='box2'> <h2 className='month'> 0 </h2>
            <h2 className='experience'>Project <br /><span>Completed</span></h2>
</div>
         </div>
         <div className='d-flex  about-boxe2'>
           <div className='box3'> <h2 className='month'>0</h2>
            <h2 className='experience'>Happy <br /><span>customer</span></h2>
</div>
           <div className='box4'> <h2 className='month'>0</h2>
            <h2 className='experience'>Award <br /><span>Wining</span></h2>
</div>
         </div>
       </div>
      </div>
      </div>
    </div>
  )
}

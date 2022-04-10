import React from 'react'
import "../content.css"
// import download from '../../../image/download.png'
import { FaDownload } from 'react-icons/fa';
export default function About() {
  return (
    <div className='content-about'>
      <div className='about-head'><h3><span> About </span> me</h3> </div>
      <div><hr/></div>
      <div className='d-flex justify-between'>
        <div>
      <div className='about-name'>Name : <span>Sanjeev Maurya</span></div>
      <div className='about-age'>Age : <span>20</span></div>
      <div className='about-Qualification'>Qualification : <span>B.Tech</span></div>
      <div className='about-post'>Post : <span>Front End Developer</span></div>
      <div className='about-language'>Language : <span>Hindi</span></div>
     <button className='btn-download'>Download CV <FaDownload/></button>
      </div>
      <div className='main-about-box'>
       <div className='about-boxe1'>
         <div className='d-flex'>
           <div className='box1'>box1</div>
           <div className='box2'>box2</div>
         </div>
         <div className='d-flex  about-boxe2'>
           <div className='box3'>box3</div>
           <div className='box4'>box4</div>
         </div>
       </div>
      </div>
      </div>
    </div>
  )
}

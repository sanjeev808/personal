import React ,{useState} from 'react'
import "../content.css"
import { NavLink } from 'react-router-dom'
import ToggleButton from './ToggleButton';



export default function Home() {
 
  return (
    <>  
    {/* <ToggleButton /> */}
      <div className='container' >
      <div className='row my-18 '>
        <div className='col-12'>
     <div className=' my-5'>
       <h2 className=''>HI THERE</h2>
       <h1 className=''>I'M <span className='bg-ffff03'>Sanjeev Maurya</span></h1>
     
     <div className='home-para'> <p> Hi Everyone My Name Is Sanjeev Maurya And I Am a React Js Developer. Currently I Am Working As a Software Developer In The Seasia Infotech. I Am Currently In This Field Because I Love Coding....</p>
      </div>
     <NavLink to="/about">
      
        <button className='btn fil-btn fs-4 '>About Me</button>
     
      </NavLink>
      </div> 
      </div>
      </div>
 </div>
 </>

  )
}                                     

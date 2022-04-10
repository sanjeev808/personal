import React from 'react'
import "../content.css"
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div className='content'>
     <div className='main-home'>
       <h2 className='hi'>HI THERE</h2>
       <h1 className='iam'>I'M <span>Sanjeev Maurya</span></h1>
     
     <div className='home-para'> <p> Hi Everyone My Name Is Sanjeev Maurya And I Am a React Js Developer. Currently I Am Working As a Software Developer In The Seasia Infotech. I Am Currently In This Field Because I Love Coding....</p>
      </div>
     <NavLink to="/about">
      <div>
        <button className='btn'>About Me</button>
      </div>
      </NavLink>
      </div> 
 </div>
  )
}                                     

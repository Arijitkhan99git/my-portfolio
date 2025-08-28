import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; 
import {Download} from 'lucide-react'
function Header() {
  


  return (
    <>
      <div className='w-full h-12 fixed top-0 flex justify-between gap-5 items-center text-primary  poppins-regular px-15 py-8 bg-background shadow-md'>
        <div>
          <h1 className='poppins-semibold'>Arijit Khan</h1>
        </div>
        <div className='flex gap-8'>
          <Link to='aboutMe' smooth={true} duration={500} className='cursor-pointer'>About Me</Link>
          <Link to='skills' smooth={true} duration={500} className='cursor-pointer'>Skills</Link>
          <Link to='myProject' smooth={true} duration={500} className='cursor-pointer'>Projects</Link>
          <Link to='contactMe' smooth={true} duration={500} className='cursor-pointer '>Contact Me</Link>
        </div>

        
        <div className=' flex rounded-sm bg-primary px-2 py-1 gap-1 text-white'>
          <button >Resume</button>
          <Download className='w-4' ></Download>
        </div>
        
      </div>
    </>
  )
}

export default Header
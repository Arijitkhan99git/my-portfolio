import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; 
import {Download} from 'lucide-react'
import {Menu} from 'lucide-react'


function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
    

    const closeMenu = () => {       
        setIsMenuOpen(false)
    }

       const handelMenu =()=>{             
       setIsMenuOpen(!isMenuOpen)
        
    }


  return (
    <>
      {/* Large Screen */}
      <nav className='w-full fixed top-0 z-50 bg-background shadow-md'>
        <div className='hidden md:flex w-full h-12  justify-between gap-5 items-center text-primary  poppins-regular px-15 py-8  '>
          <div>
            <h1 className='poppins-semibold text-lg'>Arijit Khan</h1>
          </div>
          <div className='flex gap-8'>
            <Link to='skills' smooth={true} duration={500} className='cursor-pointer'>Skills</Link>
            <Link to='experience' smooth={true} duration={500} className='cursor-pointer'>Experience</Link>
            <Link to='myProject' smooth={true} duration={500} className='cursor-pointer'>Projects</Link>
            <Link to='contactMe' smooth={true} duration={500} className='cursor-pointer '>Contact Me</Link>
          </div>

          
          <div className=' flex rounded-sm bg-primary px-2 py-1 gap-1 text-white'>
            <button >Resume</button>
            <Download className='w-4' ></Download>
          </div>
          
        </div>

        {/* Mobile Screen */}
        <div className='flex md:hidden w-full h-12 fixed top-0  justify-between gap-5 items-center text-primary  poppins-regular px-15 py-8 bg-background shadow-md'>
          <div>
            <h1 className='poppins-semibold text-lg'>Arijit Khan</h1>
          </div>
          
          {/* user Menu */}
          <div className='flex items-center gap-6  '>                                 

              <button onClick={handelMenu}>
                      <Menu className="h-6 w-6 text-primary cursor-pointer"></Menu>
              </button>                      
          </div>
          
        </div>

        <div className={`${isMenuOpen ? 'block': 'hidden' } md:hidden bg-gradient-to-r from-gray-200  to-slate-300 py-10 px-15`}>
          <div className='flex flex-col gap-4  poppins-regular text-lg text-primary'>       
            <Link to='skills' onClick={closeMenu} smooth={true} duration={500} className='cursor-pointer'>Skills</Link>
            <Link to='experience' onClick={closeMenu} smooth={true} duration={500} className='cursor-pointer'>Experience</Link>
            <Link to='myProject' onClick={closeMenu} smooth={true} duration={500} className='cursor-pointer'>Projects</Link>
            <Link to='contactMe' onClick={closeMenu} smooth={true} duration={500} className='cursor-pointer '>Contact Me</Link>
            <a className='cursor-pointer'>Resume</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
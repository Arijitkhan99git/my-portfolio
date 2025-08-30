import React from 'react'
import { profilePic } from '../assets/index'
import {Facebook} from 'lucide-react'
import {Github} from 'lucide-react'
import {Linkedin} from 'lucide-react'

function Intro() {
  return (
    <>
    {/* Large Screen */}
    <div className='hidden sm:block py-20 px-8 md:px-15 mt-8'>
      <div className='flex justify-between w-full items-center mb-6 lg:mb-4'>
        
        <div className='text-primary min-pr-10 space-y-3 sm:max-w-[50%] md:max-w-[60%]'>
          <h2 className='text-xl md:text-2xl'>Hello I'am <span className='poppins-bold'>Arijit Khan.</span></h2>
          <h1 className='sm:text-3xl md:text-4xl lg:text-5xl poppins-extrabold'>Fronend Developer</h1>
          <h2 className='text-xl md:text-2xl'>Based in <span className='poppins-bold'>India</span></h2>
          <p className='text-lg'>I am currently Trainee Software Engineer at Broadifitech Pvt Ltd.
            I have worked as a dedicated Senior Systems Engineer at Infosys, with a strong foundation in JavaScript, Android App
            Development, and various web technologies. With experience in maintaining Linux-based servers. 
          </p>
        </div >
           
        <div className='sm:max-w-[40%] md:max-w-[30%] lg:max-w-[25%] '>
           <img src={profilePic} alt="profilePic" className='rounded-tl-4xl rounded-br-4xl '/>
        </div>
      </div>

      <div className='flex gap-6 text-white '>
        <div className='p-1 bg-primary  rounded-sm'>
          <Facebook ></Facebook>
        </div>
         <div className='p-1 bg-primary  rounded-sm'>
          <Github ></Github>
        </div>
         <div className='p-1 bg-primary  rounded-sm'>
          <Linkedin ></Linkedin>
        </div>
          
      </div>

    </div>

    {/* Mobile Screen */}

    <div className='flex flex-col gap-5 sm:hidden pt-20 px-8 mt-8 '>
      <div className=' w-full flex flex-col justify-center items-center gap-8 mb-6 lg:mb-4 '>
        
          {/* Profile Image */}
        <div className='max-w-[60%] '>
           <img src={profilePic} alt="profilePic" className='rounded-xl '/>
        </div>

        {/* Intro text */}
        <div className='text-primary text-center min-pr-10 space-y-3 sm:max-w-[50%] md:max-w-[60%]'>
          <h2 className='text-2xl'>Hello I'am <span className='poppins-bold'>Arijit Khan.</span></h2>
          <h1 className='text-3xl poppins-extrabold'>Fronend Developer</h1>
          <h2 className='text-2xl'>Based in <span className='poppins-bold'>India</span></h2>
          <p className='text-lg' >I am currently Trainee Software Engineer at Broadifitech Pvt Ltd.
            I have worked as a dedicated Senior Systems Engineer at Infosys, with a strong foundation in JavaScript, Android App
            Development, and various web technologies. With experience in maintaining Linux-based servers. 
          </p>
        </div >
           
       
      </div>

      <div className='flex justify-center gap-6 text-white '>
        <div className='p-1 bg-primary  rounded-sm'>
          <Facebook ></Facebook>
        </div>
         <div className='p-1 bg-primary  rounded-sm'>
          <Github ></Github>
        </div>
         <div className='p-1 bg-primary  rounded-sm'>
          <Linkedin ></Linkedin>
        </div>
          
      </div>

    </div>
    </>
  )
}

export default Intro
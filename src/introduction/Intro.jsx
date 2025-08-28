import React from 'react'
import { profilePic } from '../assets/index'
import {Facebook} from 'lucide-react'
import {Github} from 'lucide-react'
import {Linkedin} from 'lucide-react'

function Intro() {
  return (
    <>
    <div className='py-20 px-15 mt-8'>
      <div className='flex justify-between w-full items-center '>
        
        <div className='text-primary min-pr-10 space-y-3 max-w-[60%]'>
          <h2 className='text-2xl'>Hello I'am <span className='poppins-bold'>Arijit Khan.</span></h2>
          <h1 className='text-5xl poppins-extrabold'>Fronend Developer</h1>
          <h2 className='text-2xl'>Based in <span className='poppins-bold'>India</span></h2>
          <p>I am currently Trainee Software Engineer at Broadifitech Pvt Ltd.
            I have worked as a dedicated Senior Systems Engineer at Infosys, with a strong foundation in JavaScript, Android App
            Development, and various web technologies. With experience in maintaining Linux-based servers. 
          </p>
        </div >
           
        <div className=' max-w-[25%] '>
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
    </>
  )
}

export default Intro
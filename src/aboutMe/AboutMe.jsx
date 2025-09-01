import React, { useState } from 'react'
import {aboutMe} from '../assets/index'
import {aboutMeLogo} from '../assets/index'
import Modal from './Modal'

function AboutMe() {
  const [showModal, setShowModal] =  useState(false)


  return (
    <>
      <div id='aboutMe' className=' flex flex-col md:flex-row justify-center items-center pt-20 px-8 md:px-15'>
      
      <div className='w-full bg-sky-100/50 shadow-lg py-10  rounded-2xl border border-white'>
            {/* Heading */}
          <div className='flex gap-3 justify-center pb-10'>
            <img src={aboutMeLogo} alt="AboutMeLogo" className='w-10' />
            <h1 className='text-3xl  text-primary'>About <span className='poppins-bold'>Me</span></h1>   
          </div>

          {/* content */}
          <div className='flex flex-col md:flex-row items-center p-4 sm:p-6 md:px-8 gap-5 md:gap-10 lg:gap-12'>
            <div className='max-w-[50%] sm:max-w-[40%] md:max-w-[30%] lg:max-w-[25%] '>
                <img src={aboutMe} alt="Aboutme" className='rounded-xl  '/>
            </div>

            <div className='text-center md:text-left space-y-5'>
                <p>I'm a dedicated and passionate developer with a strong foundation in JavaScript, Android app development, and full-stack web technologies. With professional experience at Infosys as a Senior Systems Engineer, I've worked across high-impact projects involving application support, server management, and modern development frameworks. Currently, I'm focused on front-end development, where I combine design thinking with technical expertise to build user-friendly, responsive interfaces. I enjoy crafting seamless digital experiences that not only function well but also look great.</p>

                <button 
                  onClick={()=>setShowModal(true)}
                  className='bg-primary text-white p-2 rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-800'>
                  Read More</button>

                  
            </div>
          </div>

        </div>
        
      </div>

       {showModal && <Modal onClose = {()=>setShowModal(false) } ></Modal>}
    </>
  )
}

export default AboutMe
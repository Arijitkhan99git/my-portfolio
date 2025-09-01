import React, { useRef, useEffect } from 'react'
import {aboutMe} from '../assets/index'
import {aboutMeLogo} from '../assets/index'
import { X } from 'lucide-react';
function Modal({onClose}) 
{
   useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Re-enable body scroll when modal closes
    return () => {
      document.body.style.overflow = 'unset';
      
    };
  }, []);

  const modalRef = useRef(null)

  const closeModal = (e)=>{
      if(modalRef.current === e.target){   
        onClose()
      }
  }

  return (
     <div ref={modalRef} onClick={closeModal} className='fixed inset-0  backdrop-blur-lg bg-black/10 flex items-center justify-center px-8 md:px-15   '>
      
      <div className='max-w-7xl h-full max-h-[80%]   flex flex-col items-center justify-center '>
       <button onClick={onClose} className='place-self-end my-5 cursor-pointer'><X size={30} /></button>
        <div className='w-full h-full mx-4 bg-gradient-to-r from-gray-200 to-black/20 shadow-lg py-10 rounded-2xl border border-white overflow-y-scroll md:overflow-auto'>
                    {/* Heading */}
                  <div className='flex gap-3 justify-center pb-10'>
                    <img src={aboutMeLogo} alt="AboutMeLogo" className='w-10' />
                    <h1 className='text-3xl  text-primary'>About <span className='poppins-bold'>Me</span></h1>   
                  </div>
        
                  {/* content */}
                  <div className='flex flex-col md:flex-row items-center p-4 sm:p-6 md:px-8 gap-5 md:gap-10 lg:gap-12'>
                    <div className='max-w-[50%] sm:max-w-[40%] md:max-w-[30%] lg:max-w-[20%] '>
                        <img src={aboutMe} alt="Aboutme" className='rounded-xl  '/>
                    </div>
        
                    <div className='text-center md:text-left md:text-white'>
                        <p className='text-sm md:text-base'>I'm a dedicated and passionate developer with a strong foundation in JavaScript, Android app development, and full-stack web technologies. With professional experience at Infosys as a Senior Systems Engineer, I've worked across high-impact projects involving application support, server management, and modern development frameworks.
                        Currently, I'm focused on front-end development, where I combine design thinking with technical expertise to build user-friendly, responsive interfaces. I enjoy crafting seamless digital experiences that not only function well but also look great.
                        Beyond coding, photography is my creative escape. I love capturing moments through the lens and bringing them to life with thoughtful editing. Whether it's building elegant UI or editing a perfect shot, I'm always driven by creativity, precision, and passion.
                        Since starting my journey in tech in 2017, I've continuously embraced new challenges—from Android apps and neural networks to cloud-based tools like Azure and Power BI. I believe in learning by doing and turning ideas into meaningful, real-world solutions.
                        </p>                 
                    </div>
                  </div>
          </div>
          </div>
        
    </div>
  )
}

export default Modal
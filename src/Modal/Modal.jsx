import React, { useRef, useEffect, Children } from 'react'
import {aboutMe} from '../assets/index'
import {aboutMeLogo} from '../assets/index'
import { X } from 'lucide-react';

function Modal({onClose, children}) 
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
      
      <div className='max-w-7xl  max-h-[80%]   flex flex-col items-center justify-center '>
       <button onClick={onClose} className='place-self-end my-5 cursor-pointer'><X size={30} /></button>

        <div className='w-full h-full mx-4 bg-gradient-to-r from-gray-200 to-black/20 shadow-lg py-10 rounded-2xl border border-white overflow-y-scroll md:overflow-auto'>
                 {children}
          </div>
          </div>
        
    </div>
  )
}

export default Modal
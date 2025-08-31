import React from 'react'
import { Copyright } from 'lucide-react';
function Footer() {
  return (
    <>
      <div className='px-8 bg-primary mt-20 h-15 flex items-center justify-center text-gray-300'>
          <div className='flex gap-2'>
            <Copyright size={25} className='text-gray-300'></Copyright>
            <h4>2025 | Designed and coded with Arijit Khan</h4>
          </div>
          
      </div>
    </>
   
  )
}

export default Footer
import React from 'react'
import {Facebook} from 'lucide-react'
import {Github} from 'lucide-react'
import {Linkedin} from 'lucide-react'

function SocialMedias() {
  const iconHoverEffetct = 'inline-block  p-1 bg-primary  rounded-sm transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-blue-700'

  return (
    <>
        <div className='flex gap-6 text-white '>
            <a 
            href='https://www.facebook.com'
            target="_blank"
            rel="noopener noreferrer"
            className={iconHoverEffetct}
            >
            <Facebook ></Facebook>
            </a>

            <a 
            href='https://github.com/Arijitkhan99git'
            target="_blank"
            rel="noopener noreferrer"
            className={iconHoverEffetct}
            >
            <Github ></Github>
            </a>

            <a 
            href='https://www.linkedin.com/in/arijit-khan-72375b18b/'
            target="_blank"
            rel="noopener noreferrer"
            className={iconHoverEffetct}
            >
            <Linkedin ></Linkedin>
            </a>
                
                
        </div>
    </>
    
  )
}

export default SocialMedias
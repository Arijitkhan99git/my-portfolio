import React, { useState } from 'react'
import {contactMe} from '../assets/index'
import {email} from '../assets/index'
import {phoneLogo} from '../assets/index'
import { Copy } from 'lucide-react';

function ContactMe() {
  const emailAddress = 'samrat19khan@gmail.com'
  const phoneNumber = '+91 9547172220'
  
  // State to track which item was copied
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const copyEmailToClipboard = () => {
    window.navigator.clipboard.writeText(emailAddress)
    setCopiedEmail(true)
    // Hide the message after 2 seconds
    setTimeout(() => {
      setCopiedEmail(false)
    }, 2000)
  }

  const copyPhoneNoToClipboard = () => {
    window.navigator.clipboard.writeText(phoneNumber)
    setCopiedPhone(true)
    // Hide the message after 2 seconds
    setTimeout(() => {
      setCopiedPhone(false)
    }, 2000)
  }

  return (
    <div id='contactMe' className='flex justify-center items-center pt-20 px-8 md:px-15'>
      <div className='w-full bg-sky-100/50 shadow-lg py-10 rounded-2xl border border-white'>
        {/* Heading */}
        <div className='flex gap-3 justify-center pb-10'>
          <img src={contactMe} alt="AboutMeLogo" className='w-10' />
          <h1 className='text-3xl text-primary'>Get In <span className='poppins-bold'>Touch</span></h1>   
        </div>

        {/* content */}
        <div className='flex flex-col lg:flex-row justify-between items-center p-4 sm:p-6 md:px-8 gap-5 md:gap-10 lg:gap-12'>
          <div className='w-full lg:w-1/2 xl:w-1/3 text-center lg:text-left text-lg lg:text-xl space-y-4'>
            <h3 className='poppins-bold'>What's next?</h3>
            <p className='text-gray-600'>Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
          </div>
          
          <div className='w-full lg:w-1/2 xl:w-1/3 space-y-4'>
            {/* Email Section */}
            <div className='flex items-center justify-between p-3 bg-white rounded-lg shadow-sm'>
              
              <div className='flex items-center gap-3'>
                <img src={email} alt="email" className='w-6 h-6' />
                <span className='text-sm md:text-base text-gray-700'>{emailAddress}</span>
              </div>

              <div className='flex items-center gap-2'>
                <button 
                  onClick={copyEmailToClipboard}
                  className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                >
                  <Copy className='w-4 h-4 text-gray-600' />
                </button>
                {copiedEmail && (
                  <span className='text-sm text-green-600 font-medium animate-fade-in'>
                    Copied to clipboard
                  </span>
                )}
              </div>
            </div>

            {/* Phone Section */}
            <div className='flex items-center justify-between p-3 bg-white rounded-lg shadow-sm'>
              <div className='flex items-center gap-3'>
                <img src={phoneLogo} alt="phone" className='w-6 h-6' />
                <span className='text-sm md:text-base text-gray-700'>{phoneNumber}</span>
              </div>
              <div className='flex items-center gap-2'>
                <button 
                  onClick={copyPhoneNoToClipboard}
                  className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
                >
                  <Copy className='w-4 h-4 text-gray-600' />
                </button>
                {copiedPhone && (
                  <span className='text-sm text-green-600 font-medium animate-fade-in'>
                    Copied to clipboard
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add this CSS for the fade-in animation - you can put this in your global CSS file */}
      <style jsx='true'>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default ContactMe
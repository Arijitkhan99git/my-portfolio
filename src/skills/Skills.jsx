import React from 'react'
import { mySkills } from '../assets/index'
import { java } from '../assets/index'
import { html } from '../assets/index'
import { css3 } from '../assets/index'
import { cLang } from '../assets/index'
import { netLogo } from '../assets/index'
import { azure } from '../assets/index'
import { appDevelopment } from '../assets/index'
import { gitLogo } from '../assets/index'
import { javascript } from '../assets/index'


function Skills() {
  return (
    <div id='skills' className='flex justify-center py-20 px-15'>

      <div  className=' w-full bg-gray-200 shadow-lg pt-5 pb-10 rounded-2xl border border-sky-100'>
        
        <div className='flex gap-2   justify-center'>
          <img src={mySkills} alt="mySkills" className='w-10' />
          <h1 className='text-3xl  text-primary'>My <span className='poppins-bold'>Skills</span></h1>   
        </div>

        <div className="flex justify-center ">
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 mt-10 text-primary text-center '>
            <div className=' aspect-square w-[10rem] p-4 gap-3 flex flex-col justify-center items-center bg-gray-100 rounded-lg border border-gray-500'>
              <img src={javascript} alt='JS' className='w-12' ></img>
              <h4 >JavaScript</h4>
            </div>
            <div className='aspect-square w-[10rem] p-4 gap-3 flex flex-col justify-center items-center bg-gray-100 rounded-lg border border-gray-500'>
              <img src={java} alt='JS' className='w-12' ></img>
              <h4 >Java</h4>
            </div>
            <div className='aspect-square w-[10rem] p-4 gap-3 flex flex-col justify-center items-center bg-gray-100 rounded-lg border border-gray-500'>
              <img src={html} alt='JS' className='w-12' ></img>
              <h4 >HTML 5</h4>
            </div>
            <div className='aspect-square w-[10rem] p-4 gap-3 flex flex-col justify-center items-center bg-gray-100 rounded-lg border border-gray-500'>
              <img src={css3} alt='JS' className='w-12' ></img>
              <h4 >CSS 3</h4>
            </div>
            <div className='aspect-square w-[10rem] p-4 gap-3 flex flex-col justify-center items-center bg-gray-100 rounded-lg border border-gray-500'>
              <img src={netLogo} alt='JS' className='w-12' ></img>
              <h4 >.Net</h4>
            </div>
            <div className='aspect-square w-[10rem] p-4 gap-3 flex flex-col justify-center items-center bg-gray-100 rounded-lg border border-gray-500'>
              <img src={cLang} alt='JS' className='w-12' ></img>
              <h4 >C</h4>
            </div>
            <div className='aspect-square w-[10rem] p-4 gap-3 flex flex-col justify-center items-center bg-gray-100 rounded-lg border border-gray-500'>
              <img src={azure} alt='JS' className='w-12' ></img>
              <h4 >Azure</h4>
            </div>
            <div className='aspect-square w-[10rem] p-4 gap-3 flex flex-col justify-center items-center bg-gray-100 rounded-lg border border-gray-500'>
              <img src={appDevelopment} alt='JS' className='w-12' ></img>
              <h4 >APP Development</h4>
            </div>
            <div className='aspect-square w-[10rem] p-4 gap-3 flex flex-col justify-center items-center bg-gray-100 rounded-lg border border-gray-500'>
              <img src={gitLogo} alt='JS' className='w-12' ></img>
              <h4 >Git</h4>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
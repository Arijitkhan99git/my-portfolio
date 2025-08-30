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
import { reactLogo } from '../assets/index'

function Skills() {
  const data =[
     {
      img:reactLogo,
      title:'React'
    },
    {
      img:javascript,
      title:'JavaScript'
    },
    {
      img:html,
      title:'HTML 5'
    },
    {
      img:css3,
      title:'CSS'
    },
    {
      img:netLogo,
      title:'.Net'
    },
    {
      img:appDevelopment,
      title:'App Development'
    }, 
    {
      img:azure,
      title:'Azure'
    },
    {
      img:java,
      title:'Java'
    },
    {
      img:gitLogo,
      title:'Git'
    },
     {
      img:cLang,
      title:'C'
    },
    
  ]

  return (
    <div id='skills' className='flex justify-center pt-20 px-8 md:px-15'>

      <div  className=' w-full bg-sky-100/50 shadow-lg py-10  rounded-2xl border border-white'>
        
        <div className='flex gap-3 justify-center'>
          <img src={mySkills} alt="mySkills" className='w-10' />
          <h1 className='text-3xl  text-primary'>My <span className='poppins-bold'>Skills</span></h1>   
        </div>

        <div className="flex justify-center ">
        <div className=' grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-8 md:gap-12 mt-10 p-5 text-primary text-center overflow-x-auto'>
            {
              data.map((d)=>(
                 <div key={d.title} className='aspect-square w-[7rem] sm:w-[10rem]  sm:p-4 gap-3 flex flex-col justify-center items-center
                  bg-gray-100 rounded-lg border border-gray-400 overflow-x-auto hover:shadow-lg
                  transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102'>
                  <img src={d.img} alt='JS' className='w-10 sm:w-12' ></img>
                  <h4 className=' text-sm sm:text-base'>{d.title}</h4>
                </div>
              ))
            }
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
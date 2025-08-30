import React from 'react'
import {durgaPuja} from '../assets/index'
import {myProjectLogo} from '../assets/index'
import {externalLink} from '../assets/index'

function MyProjects() {

  const projects =[
    {
      id:1,
      img:durgaPuja,
      title:'Asset Management',
      description:'A full-stack web application designed to streamline the management of company assets and users. The system allows admins to manage users and assign assets, while users can view their assigned assets and related details through a secure and user-friendly dashboard.',
      url:'github.com/Arijitkhan99git'
    },

    {
      id:2,
      img:durgaPuja,
      title:'Durga Puja',
      description:'Join us in the joyous celebration of Durga Puja, a vibrant festival that honors the triumph of Goddess Durga over evil. Our community comes together every year with devotion, cultural programs, traditional rituals, and festive spirit. Explore the schedule, participate in events, and be a part of the divine celebration!'
    },
    {
      id:3,
      img:durgaPuja,
      title:'Blog Application',
      description:'Craving something tasty? Our food delivery app brings your favorite meals from top restaurants straight to your door — hot, fresh, and fast. Browse menus, track orders in real time, and enjoy contactless delivery anytime, anywhere!'
    }
  ]

  return (
    <div id='myProject' className='flex justify-center pt-20 px-8 md:px-15'>
      
      <div className='w-full bg-sky-100/50 shadow-lg py-10  rounded-2xl border border-white'>
           {/* Heading */}
            <div className='flex gap-3 justify-center pb-10'>
              <img src={myProjectLogo} alt="AboutMeLogo" className='w-10' />
              <h1 className='text-3xl  text-primary'>My <span className='poppins-bold'>Projects</span></h1>   
            </div>

          <div className="grid gap-6 lg:gap-8">
            {
              projects.map((project, index)=>(
                 <div key={project.id} 
                    className={
                      `flex flex-col md:flex-row items-center p-4 sm:p-6 lg:px-12 gap-4 md:gap-8
                      ${index%2===1 ? 'md:flex-row-reverse' : '' }    
                      `
                    }>                                    
                      {/* Project photo */}
                      <div className="w-full lg:w-1/2 xl:w-1/3 flex justify-center">
                        <img src={project.img} alt="projectPic" className="w-full max-w-md sm:max-w-md md:max-w-lg lg:max-w-full rounded-xl shadow-md" />
                      </div>

                      {/* Description */}
                      <div className="w-full lg:w-1/2 xl:w-2/3 space-y-4 mt-6 lg:mt-0">
                        <h1 className="text-xl md:text-2xl poppins-bold">{project.id}</h1>
                        <h2 className="text-lg md:text-xl lg:text-2xl poppins-semibold">{project.title}</h2>
                        <p className="text-base lg:text-lg">{project.description}</p>
                        <a 
                          href="https://github.com/Arijitkhan99git"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block hover:transition transition"
                        >
                          <img src={externalLink} alt="external Link" className='w-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 '/>
                        </a>
                      </div>              
                </div>
              ))
            }

          </div>
         

       </div>
    </div>
  )
}

export default MyProjects
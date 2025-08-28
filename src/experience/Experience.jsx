import React from 'react'
import {experienceLogo} from '../assets/index'

function Experience() {
  const data = [
     {
      name: 'Front End Developer-Trainee on Broadifi',
      duration:'(July 2025- Present)',
      deatils: 'Currently working as a Front End Developer - Trainee at Broadifitech, where I’m actively involved in web development projects. My work includes building and maintaining responsive, user-friendly web pages using React, HTML, CSS, and JavaScript. I’m gaining hands-on experience by contributing to real-world applications and exploring new, creative approaches to front-end design and functionality.'
    },
    
     {
      name: 'Senior Systems Engineer on Infosys',
      duration:'(Sep 2021- March 2025)',
      deatils: "Worked as a Senior Systems Engineer with expertise in JavaScript, web technologies, and Linux-based server maintenance.As part of the L3 Concierge Incident Management Team for Microsoft (End User Support), I served as an App Support Engineer, providing advanced troubleshooting and technical support for Microsoft's internal employees, vendors, and partners."
    },
    
    {
      name: 'Software Developer-Trainee on Teks Mobile',
      duration:'(March 2021- Sep 2021)',
      deatils: 'Completed a training program at Teks Mobile focused on mobile and cross-platform application development. Gained hands-on experience in building mobile apps, understanding app architectures, and working with cross-platform technologies. This experience helped build a strong foundation in app development principles and best practices.'
    }
    

  ]
  return (
        <div id='experience' className='flex justify-center py-20 px-15'>
    
          <div  className=' w-full bg-gray-200/50 shadow-lg  pb-10 rounded-2xl border border-white'>
            
            <div className='flex gap-3 justify-center py-10'>
              <img src={experienceLogo} alt="mySkills" className='w-10' />
              <h1 className='text-3xl  text-primary'>My <span className='poppins-bold'>Experience</span></h1>   
            </div>

            <div className='flex flex-col gap-8'>
              {
                data.map((d)=>(
                    <div className='flex flex-col gap-4 mx-10 px-10 py-10 border-2 border-blue-200 rounded-2xl bg-gray-100'>
                      <div className='flex justify-between'>
                        <div>
                          <h2 className='text-lg poppins-bold text-gray-700'>{d.name}</h2>
                        </div>
                        <h4 className='poppins-semibold'>{d.duration}</h4>
                      </div>

                      <div>
                          <p>{d.deatils}</p>
                      </div>
                    </div>
                ))
              }
            </div>
           

          </div>
        </div>  
    
  )
}

export default Experience
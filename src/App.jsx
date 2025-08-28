import { useState } from 'react'

import './App.css'
import Header from './header/Header'
import Intro from './introduction/Intro'
import Skills from './skills/Skills'
import Experience from './experience/Experience'
import AboutMe from './aboutMe/AboutMe'
import MyProjects from './myProjects/MyProjects'
import ContactMe from './contactMe/ContactMe'
import Footer from './footer/Footer'

function App() {


  return (
    <div className="scroll-smooth bg-gray-200 ">
     <Header></Header>
     <Intro></Intro>
     <Skills></Skills>
     <Experience></Experience>
     <AboutMe></AboutMe>
     <MyProjects></MyProjects>
     <ContactMe></ContactMe>
     <Footer></Footer>
    </div>
  )
}

export default App

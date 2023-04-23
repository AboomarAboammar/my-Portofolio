import React, { useState } from 'react'
import Contact from './components/contact/contact'
import Intro from './components/intro/intro'
import Portofolio from './components/portfolio/portofolio'
import Testmonials from './components/testmonials/testmonials'
import Topbar from './components/topbar/topbar'
import Works from './components/works/works'
import "./app.css";
import Menu from './components/menu/Menu'
const App = () => {
  const [open,setOpen] =useState(false)
  return (
    <div className='app'>
     <Topbar open={open} setOpen={setOpen}/>
     <Menu  open={open} setOpen={setOpen}/>
     <div className='section'>
      
      
      <Intro/>
      <Portofolio/>
      <Works/>
      <Testmonials/>
      <Contact/>
     
     </div>
      </div>
  )
}

export default App
import React from 'react'
import "./topbar.css"
import { Mail, Person } from '@mui/icons-material';

const Topbar = ({open,setOpen}) => {
  return (
  
      
    <div className={"topbar "+ (open && "activ")}>
       <div className='wrapper'>
        <div className='left'>
            <a href='#intro' className='logo'>junior..Intern...</a>
        
        
        <div className='itemcontainer'>
           <Person className='icon'/>
           <span>+201113756009</span>
        </div>
        <div className='itemcontainer'>
           <Mail className='icon'/>
           <span>aboomaraboammar@gmail.com</span>
        </div>
       </div>
       <div className='right'>
        <div className='hamburger' onClick={()=>setOpen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
           </div>
        </div>
       </div>
       </div>
      
  )
}

export default Topbar
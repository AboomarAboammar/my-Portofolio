import React from 'react'
import "./topbar.css"
import { Mail, Phone } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Topbar = ({open,setOpen}) => {

   const handleCall = () => {
      window.location.href = "tel:+201113756009";
    };
  return (
  
      
    <div className={"topbar "+ (open && "activ")}>
       <div className='wrapper'>
        <div className='left'>
            <a href='#intro' className='logo'>junior...</a>
        
        
        <div className='itemcontainer'>
           <Phone  className='icon'/>
           <span onClick={handleCall} style={{ cursor: 'pointer', color: 'green', textDecoration: 'underline' }}>
    Call Me
    </span>
        </div>
        <div className='itemcontainer'>
           <Mail className='icon'/>
           <span>mokhtarmohammed101@gmail.com</span>
        </div>
         <div className='itemcontainer'>
         
         <a href="https://github.com/AboomarAboammar" target="_blank" rel="noopener noreferrer">
           <GitHubIcon  className='icon'/>
         </a>
       </div>
       <div className='itemcontainer'>
         
       <a href="https://www.linkedin.com/in/mokhtar-mohammed-29b80624b/" target="_blank" rel="noopener noreferrer">
         <LinkedInIcon  className='icon'/>
       </a>
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
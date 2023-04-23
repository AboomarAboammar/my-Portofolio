import React from 'react'
import "./contact.css";
import { useState } from 'react';



const Contact = () => {
  const [messege,setMessege] =useState(false);
  const handleSubmit=(e)=>{
    e.preventDefault();
    setMessege(true)
  }
  return (
    
    <div className='contact' id='contact'>
      
       
          
      <div className="left">
     
        <img src='assets/shake.png'alt=''/>
       
      </div>
      
      
      <div className="right">
    
        <h2>contact.</h2>
          <form onSubmit={handleSubmit}>
            <input type='email'placeholder='email'/>
            <textarea placeholder='message'></textarea>
            <button type='submit'>Send</button>
            {messege && <h3>Thanks,I will reply ASAP :)</h3>}
          
          </form>
         
        
          
      </div>
     
      
     
      
        </div>
       
  )
}

export default Contact
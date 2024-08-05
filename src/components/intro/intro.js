import React,{useEffect, useRef} from 'react';
import myImg from "../assets/WhatsApp Image 2023-01-03 at 14.44.43 (2).jpg";
import arrowButtom from "../assets/R.png"
import { init } from 'ityped';
import "./intro.css";
const Intro = () => {
  
  const textRef =useRef();
  const skillRef =useRef();
  const shoudlog =useRef(true);
  const skilllog =useRef(true);
  useEffect(()=>{
    if (shoudlog.current){
      shoudlog.current=false;
      init(textRef.current, 
        {  showCursor: true,
          backDelay:  1500,
          backSpeed:  70,
          strings: ["  Responsive designe","  Frontend(react and next)js","  React Devolper"],
          
            });
    };
    if (skilllog.current){
      skilllog.current=false;
      init(skillRef.current, 
        {  showCursor: true,
          backDelay:  1500,
          backSpeed:  70,
          strings: ["  Languages & Technologies:","  HTML-HTML5","  CSS-CSS3","  JavaScript-ECMAScript","  Tools & Libraries:","  Bootstrap, React Bootstrap","  Font Awesome, Google Icons","  Cookie Universal, Git","  Other Skills:","  Performance Optimization","  Object-Oriented Programming (OOP), JSON, AJAX","  Testing and Debugging","  Responsive Design, Animation"],
         
            });
    }
    
   
          
  },[])
  return (
    <div className='intro' id='intro'>
      
     <div className='left'>
      <div className='imgContainer'>
        <img src={myImg}alt='webdevolper'/>
      </div>
     </div>
     <div className='right'>
      <div className='wrapper'>
        <h2>HiThere, I am</h2>
        <h1>Mokhtar Mohammed</h1>
        <h3>Freelance<span ref={textRef}></span></h3>
        <h3>Skills<span ref={skillRef}></span></h3>
        
      </div>
      <a href='#portofolio'>
        <img src={arrowButtom}alt='down'/>
      </a>
     </div>
    
        </div>
  )
}

export default Intro
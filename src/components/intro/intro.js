import React,{useEffect, useRef} from 'react';
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
          strings: ["Designer","Frontend","Reactjs Devolper"],
          
            });
    };
    if (skilllog.current){
      skilllog.current=false;
      init(skillRef.current, 
        {  showCursor: true,
          backDelay:  1500,
          backSpeed:  70,
          strings: ["html-html5","css-css3-bootstrap","js-reactjs-nextjs...."],
          
            });
    }
    
   
          
  },[])
  return (
    <div className='intro' id='intro'>
      
     <div className='left'>
      <div className='imgContainer'>
        <img src='assets/WhatsApp Image 2023-01-03 at 14.44.43.jpg'alt='webdevolper'/>
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
        <img src='assets/R.png'alt='down'/>
      </a>
     </div>
    
        </div>
  )
}

export default Intro
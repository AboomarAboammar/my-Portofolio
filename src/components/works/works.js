
import React, { useState } from 'react'
import "./works.css";
const Works = () => {
  const [currslider,setCurrSlider]=useState(0)
  const data =[
    {
        id:1,
        title:"Web Design",
       img:"assets/resturant.png",
        desc:"Web Design by reactjs and reactbootstrap ",
         icon:"assets/right.png"},
         {
        id:2,
        title:"Web Application",
       img:"assets/basket.PNG",
        desc:"Web Application by react js and react bootstrap formatCurrency",
         icon:"assets/glob.png"},
         {
        id:3,
        title:"Web Design",
       img:"assets/menu.png",
        desc:"menu design by reactjs and reactbootstrap ",
         icon:"assets/OiP.jpeg"}];

         const handleClick=(way)=>{
          way === "left" ? setCurrSlider(currslider > 0 ?currslider -1 : 2)
          :setCurrSlider(currslider < data.length -1 ? currslider + 1 : 0);
         }
  return (
    <div className='works' id='works'>
      
      <div className='slider' style={{transform:`translateX(-${currslider *10}vw)`}}>
      {data.map((d)=>(
        <div key={d.id} className='container'>
        
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src={d.icon} alt=''/>
                </div>
                <h2>{d.title}</h2>
                <p>
                {d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className='right'>
              <img src={d.img}alt={d.title}/>
            </div>
          </div>
        </div>))}
      </div>
      <img src='assets/arrow.png'className='arrow leftarrow' alt='' onClick={()=>handleClick("left")}/>
      <img src='assets/arrow.png'className='arrow rightarrow' alt=''  onClick={()=>handleClick()}/>
    </div>
  )
}

export default Works
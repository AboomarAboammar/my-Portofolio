import React from 'react'
import "./testmonials.css";
const Testmonials = () => {
  const data =[
    {
        id:1,
        name:"person 1",
        title:"Web Design",
       img:"assets/1.jpg",
        desc:"description description description description description description description",
         icon:"assets/linkedin-social-outline-logotype.png"},
         {
        id:2,
        name:"person 2",
        title:"Web Application",
       img:"assets/avatar.png",
        desc:"description description description description description description description",
         icon:"assets/R.jpeg",
          featured:true},
         {
        id:3,
        name:"person 3",
        title:"Web Design",
       img:"assets/ff.jpg",
        desc:"description description description description description description description",
         icon:"assets/yotube.jpeg"}];

  return (
    <div className="testmonials" id='testmonials'>
      <h1>Tstimonials</h1>
      <div className='container'>
        {data.map((d)=>(
        <div key={d.id} className={d.featured ? "card featured" : "card"}>
          <span className='top'>
            <img src='assets/right.png' className='left' alt=''/>
            <img src={d.img}className='user' alt=''/>
            <img src={d.icon} className='right' alt=''/>
          </span>
          <span className='center'>
          {d.desc}
          </span>
          <span className='bottom'>
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </span>
        </div>))}
      </div>
    </div>
  )
}

export default Testmonials
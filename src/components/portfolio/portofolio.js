import React, { useEffect, useState } from 'react'
import "./portofolio.css";

import PortfolioList from './PortfolioList'
import{featuredPortfolio,ReactjsPortfolio,
  DesignPortfolio,WebPortfolio} from"../../Data"
const Portofolio = () => {
  const [selcted,setSelected]=useState("featured");
  const [data,setData]=useState([]);
  useEffect(()=> {
    switch(selcted){
    case "featured":
      setData(featuredPortfolio)
      break;
      case "web":
      setData(WebPortfolio)
      break;
      case "reactjs devolpper":
      setData(ReactjsPortfolio)
      break;
      case "design":
      setData(DesignPortfolio)
      break;
      default:setData(featuredPortfolio)}
  },[selcted])
  const List =[
    {
      id:"featured",
      title:"Featured"
    },
    {
     id:"web",
     title:"Web"
    },
     {
      id:"design",
      title:"Design"
     },
    {
      id:"reactjs devolpper",
      title:"Reactjs Devolpper"
    }];
  return (
    <div className='portofolio' id='portofolio'>
     <h1>Portfolio</h1>
     <ul>
      {List.map((item)=>(<PortfolioList key={item.id} title={item.title}
       active={selcted === item.id}
        setSelected={setSelected}
        id={item.id}/>))}
     </ul>
     <div className='container'>
      {data.map((d)=>(
        <div key={d.id} className='item'>
          <img src={d.img} alt=""/>
          <h3>{d.title}</h3>
          
          
        </div>
      ))}

     </div>

    </div>
  )
}

export default Portofolio
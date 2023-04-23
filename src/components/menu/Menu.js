import React from 'react'
import "./Menu.css";
function Menu({open,setOpen}) {
  return (
    <div className={'menu '+(open && "active")} >
        <ul >
            <li onClick={()=>setOpen(false)}>
                <a href='#intro'>Home</a>
                <a href='#portofolio'>Portfolio</a>
                <a href='#works'>Works</a>
                <a href='#testmonials'>Testmonials</a>
                <a href='#contact'>Contact</a>
                
            </li>
        </ul>
    </div>
  )
}

export default Menu
import React, { useState } from 'react';
import icon1 from "../assets/right.png";
import icon2 from "../assets/glob.png";
import icon3 from "../assets/OIP.jpeg";
import arrow1 from "../assets/arrow.png";
import img1 from "../assets/gym.PNG";
import img2 from "../assets/strapi.PNG";
import img3 from "../assets/fullStack.PNG";
import GitHubIcon from '@mui/icons-material/GitHub';

import "./works.css";

const Works = () => {
  const [currSlider, setCurrSlider] = useState(0);
  const data = [
    {
      id: 1,
      title: "Web Design",
      img: img1,
      desc: " Developed a state-of-the-art, fully responsive gym website featuring engaging and interactive animations",
      icon: icon1
    },
    {
      id: 2,
      title: "Web Development ",
      img: img2,
      desc: "Developed an advanced e-commerce site using React.js, React Bootstrap, and Strapi. Features light/dark modes, a shopping cart, and animations with Framer Motion.",
      icon: icon2
    },
    {
      id: 3,
      title: "Web Application",
      img: img3,
      desc: "Developing a fully responsive e-commerce website with product and category management, customer management, and user authentication.",
      icon: icon3
    }
  ];

  const handleClick = (direction) => {
    if (direction === "left") {
      setCurrSlider(currSlider > 0 ? currSlider - 1 : data.length - 1);
    } else {
      setCurrSlider(currSlider < data.length - 1 ? currSlider + 1 : 0);
    }
  };

  return (
    <div className='works' id='works'>
      <div className='slider' style={{ transform: `translateX(-${currSlider * 100}vw)` }}>
        {data.map((d) => (
          <div key={d.id} className='container'>
            <div className='item'>
              <div className='left'>
                <div className='leftContainer'>
                  <div className='imgContainer'>
                    <img src={d.icon} alt='' />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <a href="https://github.com/AboomarAboammar" target="_blank" rel="noopener noreferrer">
                  <span>Projects<GitHubIcon /></span>
                </a> 
                </div>
              </div>
              <div className='right'>
                <img src={d.img} alt={d.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src={arrow1} className='arrow leftarrow' alt='' onClick={() => handleClick("left")} />
      <img src={arrow1} className='arrow rightarrow' alt='' onClick={() => handleClick("right")} />
    </div>
  );
};

export default Works;

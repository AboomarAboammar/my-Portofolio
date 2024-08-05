import React from 'react';
import "./testmonials.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/avatar.png";
import img3 from "../assets/ff.jpg";
import icon1 from "../assets/linkedin-social-outline-logotype.png";
import icon2 from "../assets/R.jpeg";
import icon3 from "../assets/yotube.jpeg";

const Testmonials = () => {
  const data = [
    {
      id: 1,
      name: "Person 1",
      title: "Web Design",
      img: img1,
      desc: "description description description description description description description",
      icon: icon1
    },
    {
      id: 2,
      name: "Person 2",
      title: "Web Application",
      img: img2,
      desc: "description description description description description description description",
      icon: icon2,
      featured: true
    },
    {
      id: 3,
      name: "Person 3",
      title: "Web Design",
      img: img3,
      desc: "description description description description description description description",
      icon: icon3
    }
  ];

  return (
    <div className="testmonials" id="testmonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src={d.img} className="user" alt="" />
              <img src={d.icon} className="right" alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testmonials;

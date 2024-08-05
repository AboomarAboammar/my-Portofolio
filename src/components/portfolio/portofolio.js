import React, { useEffect, useState } from 'react';
import "./portofolio.css";
import PortfolioList from './PortfolioList';
import { featuredPortfolio, ReactjsPortfolio, DesignPortfolio, WebPortfolio } from "../../Data";

const Portofolio = () => {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(WebPortfolio);
        break;
      case "reactjs developer":
        setData(ReactjsPortfolio);
        break;
      case "design":
        setData(DesignPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  const List = [
    {
      id: "featured",
      title: "Featured"
    },
    {
      id: "web",
      title: "Web Application"
    },
    {
      id: "design",
      title: "Design"
    },
    {
      id: "reactjs developer",
      title: "Nextjs App"
    }
  ];

  return (
    <div className='portofolio' id='portofolio'>
      <h1>Portfolio</h1>
      <ul>
        {List.map((item) => (
          <PortfolioList 
            key={item.id} 
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id} 
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d) => (
          <div key={d.id} className='item'>
            <a href={d.link} target="_blank" rel="noopener noreferrer">
              <img src={d.img} alt={d.title} />
              <h3>{d.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portofolio;

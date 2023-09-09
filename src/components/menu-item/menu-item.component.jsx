import React from "react";
import { useNavigate } from "react-router-dom";

import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const navigate = useNavigate();

  return (
    <div className={`menu-item`} >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className="content" onClick={() => navigate(`${linkUrl}`)}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
import React from "react";

import "./header.scss";
import { ReactComponent as Icon } from "../assets/search-light.svg";

export default () => {
  return (
    <div className="header">
      <div className="header__buildings">
        <img
          src={require("../assets/buildingicon.png")}
          alt="icon for buildings"
        />
        <p>All Buildings</p>
      </div>
      <div className="header__options">
        <div className="header__search">
          <input type="text" placeholder="Type to search..."></input>
          <div className="header__search-icon">
            <Icon />
          </div>
        </div>
        <div className="header__country">
          <span role="img" className="header__flag" aria-label="united kingdom">
            🇬🇧
          </span>
          <p>ENG</p>
        </div>
      </div>
    </div>
  );
};

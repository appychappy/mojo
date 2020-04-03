import React from "react";

import "./map-pin.scss";
import { ReactComponent as Icon } from "../assets/building-light.svg";

export default () => {
  return (
    <div className="map-pin">
      <div className="pin">
        <i className="map-pin__icon">
          <Icon />
        </i>
      </div>
    </div>
  );
};

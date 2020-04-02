import React from "react";

import Map from "../map/map";
import "./buildings.scss";

export default () => {
  return (
    <div className="buildings">
      <div className="buildings__col">
        <h2>This is the buildings page</h2>
      </div>
      <Map />
    </div>
  );
};

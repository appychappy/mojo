import React, { useEffect, useState } from "react";

import Map from "../map/map";
import "./buildings.scss";
import BuildingsService from "../services/buildings.service";

export default () => {
  const [buildings, setBuildings] = useState(null);
  const getBuildings = () => {
    BuildingsService.getBuildings().then(
      buildings => {
        setBuildings(buildings);
      },
      err => {
        console.log(err);
      }
    );
  };
  useEffect(() => {
    getBuildings();
  }, []);
  return (
    <div className="buildings">
      <div className="buildings__col">
        <h2>This is the buildings page x</h2>
      </div>
      <Map />
    </div>
  );
};

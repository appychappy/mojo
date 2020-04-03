import React, { useEffect, useState } from "react";

import Map from "../map/map";
import "./buildings.scss";
import BuildingsService from "../services/buildings.service";
import Building from "../building/building";

export default () => {
  const [buildings, setBuildings] = useState([]);
  const getBuildings = () => {
    BuildingsService.getBuildings().then(
      buildings => {
        console.log(buildings);
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
        <div className="buildings__headline">{buildings.length} Buildings</div>
        <div className="buildings__cards">
          {buildings.map((building, index) => (
            <Building key={`building-${index}`} building={building} />
          ))}
        </div>
      </div>
      <Map />
    </div>
  );
};

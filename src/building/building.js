import React from "react";

import "./building.scss";
import { ReactComponent as UserIcon } from "../assets/user-light.svg";
import { ReactComponent as OfficeIcon } from "../assets/warehouse-alt-light.svg";

export default ({ building }) => {
  return (
    <div className="building">
      <div className="building__card">
        <img
          className="building__image"
          src={require(`../assets/${building.img}`)}
          alt={building.name}
        />
        <h3 className="building__name">{building.name}</h3>
        <p className="building__address">{building.addressOne}</p>
        <p className="building__address">{building.addressTwo}</p>
        <div className="building__statsline">
          <div className="building__stats">
            <i className="building__icon">
              <UserIcon />
            </i>
            <p className="building__stat">{building.users} Users</p>
          </div>
          <div className="building__stats">
            <i className="building__icon">
              <OfficeIcon />
            </i>
            <p className="building__stat">{building.offices} Offices</p>
          </div>
        </div>

        <div className="building__priceline">
          <p className="building__rent">For Rent</p>
          <p className="building__price">£{building.rent}/sqm</p>
        </div>
      </div>
    </div>
  );
};

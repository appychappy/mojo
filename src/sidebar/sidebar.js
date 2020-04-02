import React from "react";
import { Link } from "react-router-dom";

import "./sidebar.scss";
import { ReactComponent as Icon } from "../assets/building-light.svg";

export default () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <i className="sidebar__heading-icon">
          <Icon />
        </i>
        <h2 className="sidebar__heading">Buildings</h2>
      </div>
      <div className="sidebar__menu">
        <ul className="sidebar__nav">
          <li className="sidebar__nav-item sidebar__nav-item--headline">
            Menu
          </li>
          <li className="sidebar__nav-item">
            <Link to="/another-page">Dashboard</Link>
          </li>
          <li className="sidebar__nav-item sidebar__nav-item--active">
            <Link to="/">Buildings</Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/another-page">Posts</Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/another-page">Conversations</Link>
            <span className="sidebar__notification">2</span>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/another-page">Amenities</Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/another-page">Tenants</Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/another-page">Performance</Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/another-page">Users</Link>
          </li>
          <li className="sidebar__nav-item sidebar__nav-item--headline">
            Support
          </li>
          <li className="sidebar__nav-item">
            <Link to="/another-page">Need Help?</Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/another-page">Contact Us</Link>
          </li>
          <li className="sidebar__nav-item">
            <Link to="/another-page">Knowledge Base</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

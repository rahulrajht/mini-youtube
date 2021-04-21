import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Nav.css";
export function SideNav() {
  return (
    <>
      <nav className="sidebar">
        <ul className="list sidebar-list">
          <NavLink to="/home" className="nav-btn sidebar-btn">
            <li className="list-item-inline sidebar-list-item">
              <img src="" alt=""></img>
              <span className="btn-description">Home</span>
            </li>
          </NavLink>

          <NavLink to="/" className="nav-btn sidebar-btn">
            <li className="list-item-inline sidebar-list-item">
              <img src="" alt=""></img>
              <span className="btn-description">Search</span>
            </li>
          </NavLink>

          <NavLink to="/liked-videos" className="nav-btn sidebar-btn">
            <li className="list-item-inline sidebar-list-item">
              <img src="" alt=""></img>
              <span className="btn-description">Liked Videos</span>
            </li>
          </NavLink>

          <NavLink to="/playlist" className="nav-btn sidebar-btn">
            <li className="list-item-inline sidebar-list-item">
              <img src="" alt=""></img>
              <span className="btn-description">Playlist</span>
            </li>
          </NavLink>

          <NavLink to="/account" className="nav-btn sidebar-btn">
            <li className="list-item-inline sidebar-list-item">
              <img src="" alt=""></img>
              <span className="btn-description">Account</span>
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

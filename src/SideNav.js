import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./css/Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faThumbsUp,
  faList,
  faUser,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
export default function SideNav() {
  return (
    <>
      <nav className="sidebar">
        <ul className="list sidebar-list">
          <NavLink to="/home" className="nav-btn sidebar-btn">
            <li className="list-item-inline sidebar-list-item">
              <span className="btn-description">Home</span>
              <FontAwesomeIcon icon={faHome} />
            </li>
          </NavLink>

          <NavLink to="/" className="nav-btn sidebar-btn">
            <li className="list-item-inline sidebar-list-item">
              <span className="btn-description">Search</span>
              <FontAwesomeIcon icon={faSearch} />
            </li>
          </NavLink>

          <NavLink to="/liked-videos" className="nav-btn sidebar-btn">
            <li className="list-item-inline sidebar-list-item">
              <span className="btn-description">Liked </span>
              <FontAwesomeIcon icon={faThumbsUp} />
            </li>
          </NavLink>

          <NavLink to="/playlist" className="nav-btn sidebar-btn">
            <li className="list-item-inline sidebar-list-item">
              <span className="btn-description">Playlist</span>
              <FontAwesomeIcon icon={faList} />
            </li>
          </NavLink>

          <Link
            to={{ pathname: "/account", state: { from: "/" } }}
            className="nav-btn sidebar-btn"
          >
            <li className="list-item-inline sidebar-list-item">
              <span className="btn-description">Account</span>
              <FontAwesomeIcon icon={faUser} />
            </li>
          </Link>
        </ul>
      </nav>
    </>
  );
}

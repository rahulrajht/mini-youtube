import React from "react";
import "./css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faThumbsUp,
  faList,
  faHome,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "./context/AuthProvider";
import { Link, NavLink } from "react-router-dom";
export default function NavBar() {
  const { logout, dispatchData } = useAuth();
  const SET_USER = "setUser";
  const user = localStorage.getItem("token");

  async function LogOut() {
    try {
      await logout();
      dispatchData({
        type: SET_USER,
        currentUser: null
      });
    } catch {
      console.log("error in logout");
    }
  }

  function openNav() {
    document.getElementById("sidenav").style.display = "flex";
  }
  function closeNav() {
    document.getElementById("sidenav").style.display = "none";
  }
  return (
    <>
      <nav className="navbar-container">
        <ul className="left-container">
          <div className="menu-logo">
            <label className="label-navbar" onClick={openNav}>
              {" "}
              &#9776;{" "}
            </label>
            <span>LOGO</span>
          </div>
          <div id="sidenav" className="sidenav-slider">
            <nav className="sidebar">
              <p className="closebtn" onClick={closeNav}>
                &#8592;
              </p>
              <ul className="list sidebar-list">
                <NavLink to="/" className="nav-btn sidebar-btn">
                  <li className="list-item-inline sidebar-list-item">
                    <FontAwesomeIcon icon={faHome} />
                    <span className="btn-description">Home</span>
                  </li>
                </NavLink>

                <NavLink to="/search" className="nav-btn sidebar-btn">
                  <li className="list-item-inline sidebar-list-item">
                    <FontAwesomeIcon icon={faSearch} />
                    <span className="btn-description">Search</span>
                  </li>
                </NavLink>

                <NavLink to="/liked-videos" className="nav-btn sidebar-btn">
                  <li className="list-item-inline sidebar-list-item">
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <span className="btn-description">Liked </span>
                  </li>
                </NavLink>

                <NavLink to="/playlist" className="nav-btn sidebar-btn">
                  <li className="list-item-inline sidebar-list-item">
                    <FontAwesomeIcon icon={faList} />
                    <span className="btn-description">Playlist</span>
                  </li>
                </NavLink>

                <Link
                  to={{ pathname: "/account", state: { from: "/" } }}
                  className="nav-btn sidebar-btn"
                >
                  <li className="list-item-inline sidebar-list-item">
                    <FontAwesomeIcon icon={faUser} />
                    <span className="btn-description">Account</span>
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
          <div className="search-box">
            <input type="text" className="search-box" />
            <div className="search-btn">Search</div>
          </div>
          <ul className="right-container">
            <label className="label" htmlFor="toogle">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input type="checkbox" id="toogle" />
            <div className="account-info">
              {user ? (
                <div className="user-info nav-btn">
                  <p className="user-name">
                    {JSON.parse(localStorage.getItem("name"))}
                  </p>

                  <p className="user-email">
                    {JSON.parse(localStorage.getItem("email"))}
                  </p>

                  <NavLink to="/liked-videos">
                    <li>
                      <FontAwesomeIcon icon={faThumbsUp} />
                      <span className="btn-description">Liked </span>
                    </li>
                  </NavLink>

                  <NavLink to="/playlist">
                    <li>
                      <FontAwesomeIcon icon={faList} />
                      <span className="btn-description">Playlist</span>
                    </li>
                  </NavLink>

                  <button onClick={LogOut}>Sign Out</button>
                </div>
              ) : (
                <Link to="/login"> Log In</Link>
              )}
            </div>
          </ul>
        </ul>
      </nav>
    </>
  );
}

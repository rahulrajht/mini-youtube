import React, { useState } from "react";
import "../css/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faThumbsUp,
  faList,
  faHome
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthProvider";
import { Link, NavLink, useHistory } from "react-router-dom";
import logo from "../utils/logo.png";
import { useUrl } from "../context/useVideoPlaylistId";

export default function NavBar() {
  const { logout, dispatchData } = useAuth();
  const SET_USER = "setUser";
  const user = localStorage.getItem("token");
  const history = useHistory();
  const { setSearch } = useUrl();

  async function LogOut() {
    try {
      await logout();

      dispatchData({
        type: SET_USER,
        currentUser: null
      });
      history.push("/");
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
            <span>
              <img className="logo" src={logo} alt="LOGO" />
            </span>
          </div>
          <div id="sidenav" className="sidenav-slider">
            <nav className="sidebar">
              <p className="closebtn" onClick={closeNav}>
                &#8592;
              </p>
              <ul className="list sidebar-list">
                <NavLink to="/" className="nav-btn sidebar-btn">
                  <li className="list-item-inline sidebar-list-item">
                    <span className="btn-description">Home</span>
                    <FontAwesomeIcon icon={faHome} />
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
          </div>
          <div>
            <input
              className="search-box"
              type="text"
              placeholder="search ... "
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ul className="right-container">
            <label className="label" htmlFor="toogle">
              <FontAwesomeIcon icon={faUser} />
            </label>
            <input type="checkbox" id="toogle" />
            <div className={`account-info ${user ? "Login" : "logout"}`}>
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
                      <span className="btn-description">Liked </span>
                      <FontAwesomeIcon icon={faThumbsUp} />
                    </li>
                  </NavLink>

                  {/* <NavLink to="/playlist">
                    <li>
                      <FontAwesomeIcon icon={faList} />
                      <span className="btn-description">Playlist</span>
                    </li>
                  </NavLink> */}

                  <button onClick={LogOut}>Sign Out</button>
                </div>
              ) : (
                <Link className="login-btn" to="/login">
                  {" "}
                  Log In
                </Link>
              )}
            </div>
          </ul>
        </ul>
      </nav>
    </>
  );
}

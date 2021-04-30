import React, { useEffect } from "react";
import "./css/nav.css";
import { useUrl } from "./context/useVideoPlaylistId";
import requests from "./requests";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faThumbsUp, faList } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const { setPlaylistId } = useUrl();
  const { user, logout, dispatchData } = useAuth();
  const SET_USER = "setUser";
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

  useEffect(() => {
    const token = JSON.stringify(localStorage.getItem("token"));
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    console.log(name);
    if (JSON.parse(token) !== null) {
      dispatchData({
        type: SET_USER,
        currentUser: email
      });
    }
  });

  return (
    <>
      <nav className="nav-container">
        <ul className="left">
          <li onClick={() => setPlaylistId(requests.fetchJava)}>Java</li>
          <li onClick={() => setPlaylistId(requests.fetchjavaScript)}>
            JavaScript
          </li>
          <li onClick={() => setPlaylistId(requests.fetchNeog)}>Neog</li>
          <li onClick={() => setPlaylistId(requests.fetchReact)}>React</li>
        </ul>
        <ul className="right">
          <li>
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

                  <p className="user-email">{JSON.parse(user)}</p>

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
          </li>
        </ul>
      </nav>
    </>
  );
}

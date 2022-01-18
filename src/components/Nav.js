import React from "react";
import "../css/nav.css";
import { useUrl } from "../context/useVideoPlaylistId";
import requests from "./requests";
import { Link, NavLink } from "react-router-dom";
export default function Nav() {
  const { setPlaylistId } = useUrl();

  return (
    <>
      <nav className="nav-container">
        <ul className="left">
          <li onClick={() => setPlaylistId(requests.fetchJava)}>Java</li> 
          <Link to ={'/javascript'} > <li onClick={() => setPlaylistId(requests.fetchjavaScript)}>
            JavaScript
          </li>
          </Link>
          <li onClick={() => setPlaylistId(requests.fetchNeog)}>Neog</li>
          <li onClick={() => setPlaylistId(requests.fetchReact)}>React</li>
        </ul>
      </nav>
    </>
  );
}

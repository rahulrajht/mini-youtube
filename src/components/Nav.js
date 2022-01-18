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
          <Link className="link" to={"/java"} onClick={() => setPlaylistId(requests.fetchJava)}>Java </Link> 
          <Link className="link" to ={'/javascript'} onClick={() => setPlaylistId(requests.fetchjavaScript)}>JavaScript </Link>
          <Link className="link" to ={'/neog'} onClick={() => setPlaylistId(requests.fetchNeog)}>Neog</Link>
          <Link className="link" to ={'/react'} onClick={() => setPlaylistId(requests.fetchReact)}>React</Link>
        </ul>
      </nav>
    </>
  );
}

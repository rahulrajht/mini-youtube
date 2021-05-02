import React from "react";
import "./css/nav.css";
import { useUrl } from "./context/useVideoPlaylistId";
import requests from "./requests";

export default function Nav() {
  const { setPlaylistId } = useUrl();

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
      </nav>
    </>
  );
}

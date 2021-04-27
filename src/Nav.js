import React from "react";
import "./css/nav.css";
import { useUrl } from "./context/useVideoPlaylistId";
import requests from "./requests";

export default function Nav() {
  const { setPlaylistId } = useUrl();
  return (
    <>
      <nav className="nav-container">
        <ul>
          <li onClick={() => setPlaylistId(requests.fetchJava)}>Java</li>
          <li onClick={() => setPlaylistId(requests.fetchjavaScript)}>
            {" "}
            JavaScript{" "}
          </li>
          <li>Neog</li>
          <li>React</li>
        </ul>
      </nav>
    </>
  );
}

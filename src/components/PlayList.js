import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Video from "./Video";
import NavBar from "./NavBar";
import "../css/likedvideo.css";
import { useVideo } from "../context/videoProvider";
export default function PlayList() {
  // const email = JSON.parse(localStorage.getItem("email"));
  const { savedVideos } = useVideo();

  if (savedVideos.length !== 0)
    return (
      <div>
        <NavBar />
        <div className="liked-video-container">
          {savedVideos.map((item) => (
            <div>
              <p>{item.name} </p>
              {item.list.map((item) => (
                <Video data={item} />
              ))}
            </div>
          ))}
        </div>
        )
      </div>
    );
  else {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="fallback-msg-container">
          <h4>PlayList is Empty </h4>
        </div>
      </div>
    );
  }
}

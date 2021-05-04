import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Video from "../Video";
import NavBar from "../NavBar";
import "../css/likedvideo.css";
export default function LikedVideos() {
  const [likedvideos, setLikedVideos] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const email = JSON.parse(localStorage.getItem("email"));

  useEffect(() => {
    async function getData() {
      const url = "https://Auth-API.rahulgupta99.repl.co/save/liked";
      if (email) {
        const res = await axios.post(url, { email: email });
        setLikedVideos(res.data);
        setLoading(false);
      }
    }
    getData();
  }, [email]);

  if (likedvideos.length !== 0)
    return (
      <div>
        <NavBar />
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="liked-video-container">
            {likedvideos.map((item) => (
              <Video data={item} />
            ))}
          </div>
        )}
      </div>
    );
  else {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="fallback-msg-container">
            <h4>There is no any liked video </h4>
          </div>
        )}
      </div>
    );
  }
}

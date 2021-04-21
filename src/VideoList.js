import React, { useEffect, useState } from "react";
import { Video } from "./Video";
import "./css/Video.css";
import axios from "axios";
export default function VideoList() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://youtube-v31.p.rapidapi.com/playlistItems",
      params: {
        playlistId: "PLd3UqWTnYXOnjGmyjD3zbIkyLXP15-6w0",
        part: "snippet",
        maxResults: "50"
      },
      headers: {
        "x-rapidapi-key": "26dc9128d0mshe57c300c2573c60p10e0b2jsne8edfc946cd5",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com"
      }
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.items);
        setVideoList(response.data.items);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="video-container">
        {videoList.map((item) => (
          <Video data={item} />
        ))}
      </div>
    </>
  );
}

import axios from "axios";
import React, { useEffect } from "react";
import { Video } from "./Video";
import { useUrl } from "./context/useVideoPlaylistId";
import { useVideo } from "./context/videoProvider";
import "./css/row.css";
function VideoList() {
  const { playlistId } = useUrl();
  const { dispatchData } = useVideo();
  useEffect(() => {
    const options = {
      method: "GET",
      url: playlistId,

      headers: {
        "x-rapidapi-key": "26dc9128d0mshe57c300c2573c60p10e0b2jsne8edfc946cd5",
        "x-rapidapi-host": "youtube-v31.p.rapidapi.com"
      }
    };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.items);
        const fetchedVideoPlaylist = response.data.items;
        dispatchData({
          type: "setNewData",
          fetchedVideoPlaylist
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [playlistId, dispatchData]);

  const { videoPlaylist } = useVideo();

  return (
    <div className="row">
      <div className="video-container">
        {videoPlaylist.map((item) => (
          <Video data={item} />
        ))}
      </div>
    </div>
  );
}
export default VideoList;

import axios from "axios";
import React, { useEffect } from "react";
import Video from "./Video";
import { useUrl } from "../context/useVideoPlaylistId";
import { useVideo } from "../context/videoProvider";
import "../css/row.css";
function VideoList() {
  const { playlistId } = useUrl();
  const { dispatchData } = useVideo();
  useEffect(() => {
    const options = {
      method: "GET",
      url: playlistId,

      headers: {
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
        "x-rapidapi-host": process.env.REACT_APP_API_HOST
      }
    };
    axios
      .request(options)
      .then(function (response) {
        dispatchData({
          type: "setNewData",
          fetchedVideoPlaylist: response.data.items
        });
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [playlistId, dispatchData]);

  const { videoPlaylist } = useVideo();

  return (
    <div className="video-container">
      {videoPlaylist.map((item) => (
        <Video data={item} />
      ))}
    </div>
  );
}
export default VideoList;

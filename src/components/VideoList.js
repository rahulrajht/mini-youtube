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
    axios
      .get(playlistId)
      .then(function (response) {
        dispatchData({
          type: "setNewData",
          fetchedVideoPlaylist: response.data.data
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

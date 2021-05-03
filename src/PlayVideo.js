import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./css/playvideo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faList } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import { useVideo } from "./context/videoProvider";
import axios from "axios";

export default function PlayVideo() {
  const { videoPlaylist } = useVideo();

  const opts = {
    height: "500px",
    width: "100%",
    playerVars: { autoplay: 1 }
  };

  async function addVideoToLike(videoId) {
    const data = videoPlaylist.filter(
      (item) => item.snippet.resourceId.videoId === videoId
    );
    const { snippet } = data[0];
    const { title, thumbnails } = snippet;
    const { medium } = thumbnails;
    const { url } = medium;
    const response = await axios.post(
      "https://Auth-API.rahulgupta99.repl.co/save/liked-videos",
      {
        title: title,
        thumbnails: url,
        videoId: videoId,
        email: JSON.parse(localStorage.getItem("email"))
      }
    );
    console.log(response);
  }
  const { videoId } = useParams();

  return (
    <div className="video-player-container">
      <NavBar />

      <div className="video-player">
        <YouTube videoId={videoId} opts={opts} />;
        <div className="util-container">
          <FontAwesomeIcon
            className="icon"
            icon={faThumbsUp}
            onClick={() => addVideoToLike(videoId)}
          />
          <p className="icon">
            <FontAwesomeIcon icon={faList} />
            Create playlist
          </p>
        </div>
      </div>
    </div>
  );
}

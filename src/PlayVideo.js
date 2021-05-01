import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./css/playvideo.css";
import SideNav from "./SideNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faList } from "@fortawesome/free-solid-svg-icons";

export default function PlayVideo() {
  const opts = {
    height: "500px",
    width: "100%",
    playerVars: { autoplay: 1 }
  };
  const { videoId } = useParams();
  return (
    <div className="video-player-container">
      <SideNav />

      <div className="video-player">
        <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
        <div className="util-container">
          <FontAwesomeIcon className="icon" icon={faThumbsUp} />
          <p className="icon">
            {" "}
            <FontAwesomeIcon icon={faList} />
            Create playlist
          </p>
        </div>
      </div>
    </div>
  );
}

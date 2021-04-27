import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./css/playvideo.css";
import SideNav from "./SideNav";
export default function PlayVideo() {
  const opts = {
    height: "500px",
    width: "100%",
    playerVars: { autoplay: 1 }
  };
  const { videoId } = useParams();
  return (
    <div className="video-player-container">
      <div className="sidenav">
        <SideNav />
      </div>
      <div className="video-player">
        <YouTube videoId={videoId} opts={opts} onReady={this._onReady} />;
      </div>
    </div>
  );
}

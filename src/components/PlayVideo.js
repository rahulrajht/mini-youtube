import { useParams, useHistory } from "react-router-dom";
import YouTube from "react-youtube";
import "../css/playvideo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faList } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function PlayVideo(props) {
  toast.configure();
  const { videoId } = useParams();
  const isLiked = props.location.info ? props.location.info.isLiked : false;
  const [blueIcon, setBlueIcon] = useState(isLiked ? "blueIcon" : "");
  const [action, setAction] = useState(isLiked ? "dislike" : "like");
  const email = JSON.parse(localStorage.getItem("email"));
  const history = useHistory();

  const opts = {
    height: "400px",
    width: "100%",
    playerVars: { autoplay: 1 }
  };

  async function actionButton(videoId, type) {
    const isLogin = JSON.parse(localStorage.getItem("isUserLogin"));
    if (!isLogin)
      history.push({
        pathname: "/login",
        state: { from: history.location.state }
      });
    if (type === "like") {
      const url = "https://Auth-API.rahulgupta99.repl.co/save/liked-videos";
      const response = await axios.post(url, {
        videoId: videoId,
        email: JSON.parse(localStorage.getItem("email"))
      });
      if (response.status === 200) {
        toast.dark("Added to liked", { autoClose: 3000 });
        setBlueIcon("blueIcon");
        setAction("dislike");
      }
    }
    if (type === "dislike") {
      await axios.post(
        "https://Auth-API.rahulgupta99.repl.co/save/liked-videos-remove",
        { email: email, id: videoId }
      );
      toast.dark("Removed from liked", { autoClose: 3000 });
      setBlueIcon("");
      setAction("like");
    }
  }

  return (
    <div className="video-player-container">
      <NavBar />

      <div className="video-player">
        <YouTube videoId={videoId} opts={opts} />;
        <div className="util-container">
          <FontAwesomeIcon
            className={`icon ${blueIcon}`}
            icon={faThumbsUp}
            onClick={() => actionButton(videoId, `${action}`)}
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

import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import "./css/playvideo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faList } from "@fortawesome/free-solid-svg-icons";
import NavBar from "./NavBar";
import { useVideo } from "./context/videoProvider";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function PlayVideo() {
  const { videoId } = useParams();
  const { videoPlaylist } = useVideo();
  const [blueIcon, setBlueIcon] = useState("");
  const [action, setAction] = useState("like");
  const email = JSON.parse(localStorage.getItem("email"));

  toast.configure();

  const opts = {
    height: "500px",
    width: "100%",
    playerVars: { autoplay: 1 }
  };

  async function actionButton(videoId, type) {
    if (type === "like") {
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

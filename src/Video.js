import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import "./css/Video.css";
export default function Video(props) {
  const email = JSON.parse(localStorage.getItem("name"));

  async function removeLikeVideo(videoId) {
    console.log(videoId);
    const res = await axios.post(
      "https://Auth-API.rahulgupta99.repl.co/save/liked-videos-remove",
      { email: email, id: videoId }
    );
    console.log(res);
  }
  const { data } = props;
  let isFromLiked = null;
  if (data.snippet) {
    var { snippet } = data;
    var { publishedAt, title, resourceId, channelTitle, thumbnails } = snippet;
    var { medium } = thumbnails;
    var { url } = medium;
    var { videoId } = resourceId;
  } else {
    videoId = data.videoId;
    url = data.thumbnails;
    title = data.title;
    isFromLiked = true;
  }
  if (data)
    return (
      <div className="video-card-desktop">
        <img alt="" className="video-thumbnail" src={url}></img>
        <div className="video-info">
          <Link to={`/video/${videoId}`} className="video-text">
            <p className="video-text">{title}</p>
            <small className="credits">{channelTitle}</small>
            <small className="date">{publishedAt}</small>
          </Link>
          {isFromLiked && (
            <label
              onClick={() => removeLikeVideo(videoId)}
              className="option-container"
            >
              {" "}
              &#8942;{" "}
            </label>
          )}
        </div>
      </div>
    );
  else {
    return <div>Video List is Empty</div>;
  }
}

import React from "react";
import { Link } from "react-router-dom";
import "./css/Video.css";
export default function Video(props) {
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
      <div>
        <div className="video-card-desktop">
          <img alt="" className="video-thumbnail" src={url}></img>
          <div className="video-info">
            <Link to={`/video/${videoId}`} className="video-text">
              <p className="video-text">{title}</p>
              <small className="credits">{channelTitle}</small>
              <small className="date">{publishedAt}</small>
            </Link>
          </div>
        </div>
        {isFromLiked && (
          <div>
            <label className="option-container" htmlFor="option">
              {" "}
              &#8942;{" "}
            </label>
            <input type="checkbox" id="option" />
            <div className="options">
              <p className="option-select1">Remove </p>
              <p className="option-select2">Add to PlayList</p>
            </div>
          </div>
        )}
      </div>
    );
  else {
    return <div>Video List is Empty</div>;
  }
}

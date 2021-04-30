import React from "react";
import { Link } from "react-router-dom";
import "./css/Video.css";
export function Video(props) {
  const { data } = props;
  const { snippet } = data;
  const { publishedAt, title, resourceId, channelTitle, thumbnails } = snippet;
  const { medium } = thumbnails;
  const { url } = medium;
  const { videoId } = resourceId;

  return (
    <Link to={`/video/${videoId}`} className="video-text">
      <div className="video-card-desktop">
        <img alt="" className="video-thumbnail" src={url}></img>
        <div className="video-info">
          <p className="video-text">{title}</p>
          <small className="credits">{channelTitle}</small>
          <small className="date">{publishedAt}</small>
        </div>
      </div>
    </Link>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./css/Video.css";
export function Video(props) {
  const { data } = props;
  const { id, snippet } = data;
  const {
    publishedAt,
    channelId,
    title,
    resourceId,
    videoOwnerChannelTitle,
    description,
    channelTitle,
    thumbnails
  } = snippet;
  const { medium, high } = thumbnails;
  const { url } = medium;
  const { videoId } = resourceId;
  let videoUrl = "https://www.youtube.com/watch?v=" + videoId;
  // Crafting thumbnail
  let thumbnail = "";
  if (videoUrl !== undefined) {
    // @desc crafting medium(mq) and high(hq) quality thumbnails
    thumbnail = url;
  }

  return (
    <div className="video-card-desktop">
      <img alt="" className="video-thumbnail" src={thumbnail}></img>
      <div className="video-info">
        <Link to={videoUrl} className="video-text" key={id}>
          {title}
        </Link>
        <small className="credits">{channelTitle}</small>
        <small className="date">{publishedAt}</small>
      </div>
    </div>
  );
}

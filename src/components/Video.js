import React from "react";
import { Link } from "react-router-dom";
import "../css/Video.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Video(props) {
  toast.configure();
  const { data, isLike } = props;
  if (data)
    return (
      <div className="video-card-desktop">
        <img alt="" className="video-thumbnail" src={data.thumbnails}></img>
        <div className="video-info">
          <Link
            to={{
              pathname: `/video/${data.videoId}`,
              info: { isLiked: isLike }
            }}
            className="video-text"
          >
            <p className="video-text">{data.title}</p>
            <small className="date">{data.publishedAt}</small>
          </Link>
          {/* {isFromLiked && (
            <label
              onClick={() => removeLikeVideo(videoId)}
              className="option-container"
            >
              {" "}
              &#8942;{" "}
            </label>
          )} */}
        </div>
      </div>
    );
  else {
    return <div>Video List is Empty</div>;
  }
}

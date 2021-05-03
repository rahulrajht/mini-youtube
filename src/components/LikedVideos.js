import axios from "axios";
import React, { useEffect, useState } from "react";
import Video from "../Video";
import NavBar from "../NavBar";
import { Link } from "react-router-dom";
import "../css/likedvideo.css";
export default function LikedVideos() {
  const [likedvideos, setLikedVideos] = useState([]);
  const email = JSON.parse(localStorage.getItem("email"));

  useEffect(() => {
    async function getData() {
      const url = "https://Auth-API.rahulgupta99.repl.co/save/liked";
      if (email) {
        const res = await axios.post(url, { email: email });
        setLikedVideos(res.data);
      }
    }
    getData();
  }, [email]);

  if (likedvideos.length !== 0)
    return (
      <div>
        <NavBar />
        <div className="liked-video-container">
          {likedvideos.map((item) => (
            <Video data={item} />
          ))}
        </div>
      </div>
    );
  else {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div className="fallback-msg-container">
          <h4>You are not logged In. </h4>
          <h4>Please Login first to see your liked videos. </h4>
          <Link className="link" to="/login">
            {" "}
            Log In{" "}
          </Link>
        </div>
      </div>
    );
  }
  // // console.log(email === null);
  // // if (email === null) {
  // //   return (
  // //     <div>
  // //       <div>
  // //         <NavBar />
  // //       </div>
  // //       <div style={{ margin: "5rem" }}>Empty</div>
  // //     </div>
  // //   );

  // } else {
  //   // console.log("1");
  //   // async function getData() {
  //   //   const res = await axios.post(
  //   //     "https://Auth-API.rahulgupta99.repl.co/save/liked",
  //   //     {
  //   //       email: email
  //   //     }
  //   //   );
  //   //   console.log(res);
  //   //   setLikedVideos(res.data);
  //   // }
  //   // getData();
  //   // return (
  //   //   <div className="video-container">
  //   //     <NavBar />
  //   //     {likedvideos.map((item) => (
  //   //       <Video data={item} />
  //   //     ))}
  //   //   </div>
  //   // );
  // }
}

import "../styles.css";
import VideoList from "./VideoList";
import Nav from "./Nav";
import NavBar from "./NavBar";
import {useLocation } from "react-roter-dom";
export default function Home() {
  const location = useLocation()
  console.log(location)
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="nav">
        <Nav />
      </div>
      <div className="videolist">
        <VideoList path={location.pathname}/>
      </div>
    </div>
  );
}

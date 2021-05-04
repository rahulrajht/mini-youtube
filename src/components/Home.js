import "../styles.css";
import VideoList from "./VideoList";
import Nav from "./Nav";
import NavBar from "./NavBar";

export default function Home() {
  return (
    <div className="App">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="nav">
        <Nav />
      </div>
      <div className="videolist">
        <VideoList />
      </div>
    </div>
  );
}

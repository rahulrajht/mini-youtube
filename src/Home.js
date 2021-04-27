import SideNav from "./SideNav";
import "./styles.css";
import VideoList from "./VideoList";
import Nav from "./Nav";

export default function Home() {
  return (
    <div className="App">
      <div className="navbar">
        <SideNav />
      </div>
      <div className="video">
        <Nav />
        <VideoList />
      </div>
    </div>
  );
}

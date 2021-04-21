import { SideNav } from "./SideNav";
import "./styles.css";
import VideoList from "./VideoList";

export default function App() {
  return (
    <div className="App">
      <div className="navbar">
        <SideNav />
      </div>
      <div className="video">
        <VideoList />
      </div>
    </div>
  );
}

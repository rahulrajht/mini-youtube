import { SideNav } from "./SideNav";
import "./styles.css";
import VideoList from "./VideoList";
import Nav from "./Nav";
import { Route, Switch } from "react-router-dom";
import PlayVideo from "./PlayVideo";
import Home from "./Home";

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/video/:videoId">
          <PlayVideo />
        </Route>
      </Switch>
    </div>
  );
}

import "../styles.css";
import { Route, Switch } from "react-router-dom";
import PlayVideo from "./PlayVideo";
import Home from "./Home";
import Account from "./Account";
import Login from "./Login";
import LikedVideos from "../components/LikedVideos";
import PrivateRoute from "./PrivateRoute";
import PlayList from "./PlayList";
import Error from "./Error";
export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/video/:videoId" component={PlayVideo} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/playlist" component={PlayList} />
        <Route exact path="/javascript" component={PlayList} />
        <PrivateRoute exact path="/liked-videos" component={LikedVideos} />
        <Route exact path="*" component={Error} />
      </Switch>
    </div>
  );
}

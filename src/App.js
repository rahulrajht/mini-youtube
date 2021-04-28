import "./styles.css";
import { Route, Switch } from "react-router-dom";
import PlayVideo from "./PlayVideo";
import Home from "./Home";
import Account from "./Account";

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
        <Route exact path="/account">
          <Account />
        </Route>
      </Switch>
    </div>
  );
}

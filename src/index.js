import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/videoProvider";
import App from "./App";
import { UrlProvider } from "./context/useVideoPlaylistId";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <UrlProvider>
        <VideoProvider>
          <App />
        </VideoProvider>
      </UrlProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);

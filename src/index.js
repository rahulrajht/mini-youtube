import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { VideoProvider } from "./context/videoProvider";
import App from "./App";
import { UrlProvider } from "./context/useVideoPlaylistId";
import { AuthProvider } from "./context/AuthProvider";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UrlProvider>
          <VideoProvider>
            <App />
          </VideoProvider>
        </UrlProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
  rootElement
);

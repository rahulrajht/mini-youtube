import { useContext, createContext, useReducer } from "react";
import { data, reducer } from "./useReducer";
export const videoContext = createContext();

export function VideoProvider({ children }) {
  const [{ videoPlaylist, likedVideos, savedVideos }, dispatch] = useReducer(
    reducer,
    data
  );

  return (
    <videoContext.Provider
      value={{
        videoPlaylist,
        likedVideos,
        savedVideos,
        dispatchData: dispatch
      }}
    >
      {children}
    </videoContext.Provider>
  );
}

export function useVideo() {
  return useContext(videoContext);
}

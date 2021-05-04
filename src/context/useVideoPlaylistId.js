import { useContext, createContext, useState } from "react";
import requests from "../components/requests";
export const urlContext = createContext();

export function UrlProvider({ children }) {
  const [playlistId, setPlaylistId] = useState(requests.fetchJava);
  return (
    <urlContext.Provider value={{ playlistId, setPlaylistId }}>
      {children}
    </urlContext.Provider>
  );
}

export function useUrl() {
  return useContext(urlContext);
}

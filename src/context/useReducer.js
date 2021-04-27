export const data = {
  videoPlaylist: [],
  likedVideos: [],
  savedVideos: []
};

const SET_NEW_DATA = "setNewData";
const SET_VIDEOPLAYLIST = "setvideoPlaylist";
const ADD_LIKED_VIDEOS = "addLikedVideos";
const REMOVE_LIKED_VIDEOS = "removeLikedVideos";
const ADD_SAVED_VIDEOS = "addSavedVideos";
const REMOVE_SAVED_VIDEOS = "removeSavedVideos";

export function reducer(
  state,
  {
    type,
    id,
    items,
    filteredData,
    fetchedVideoPlaylist,
    fetchedSavedVideos,
    newVideos
  }
) {
  const { likedVideos, savedVideos } = state;
  switch (type) {
    case SET_NEW_DATA:
      return {
        ...state,
        videoPlaylist: fetchedVideoPlaylist || []
      };

    default:
      return state;
  }
}

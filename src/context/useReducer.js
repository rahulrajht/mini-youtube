export const data = {
  videoPlaylist: [],
  likedVideos: [],
  savedVideos: []
};

const SET_NEW_DATA = "setNewData";
const SET_VIDEO_PLAYLIST = "setvideoPlaylist";
const ADD_LIKED_VIDEOS = "addLikedVideos";
const REMOVE_LIKED_VIDEOS = "removeLikedVideos";
const ADD_SAVED_VIDEOS = "addSavedVideos";
const REMOVE_SAVED_VIDEOS = "removeSavedVideos";
const ADD_TO_PLAYLIST = "addtoplaylist";
export function reducer(
  state,
  {
    type,
    id,
    items,
    data,
    filteredData,
    fetchedVideoPlaylist,
    fetchedSavedVideos,
    newVideos
  }
) {
  const { likedVideos, savedVideos, videoPlaylist } = state;
  switch (type) {
    case SET_NEW_DATA:
      return {
        ...state,
        videoPlaylist: fetchedVideoPlaylist || []
      };

    case ADD_LIKED_VIDEOS:
      return {
        ...state,
        likedVideos: videoPlaylist.filter(
          (item) => item.snippet.resourceId.videoId === id
        )
      };
    case SET_VIDEO_PLAYLIST:
      return {
        ...state,
        savedVideos: savedVideos.concat(data)
      };
    case ADD_TO_PLAYLIST:
      return {
        ...state,
        savedVideos: savedVideos.map((item) =>
          item.name === data.name
            ? { ...item, list: item.list.concat(data.items) }
            : item
        )
      };
    default:
      return state;
  }
}

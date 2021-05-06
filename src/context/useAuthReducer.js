export const data = {
  user: "",
  isUserLogin: false
};

const SET_USER = "setUser";
const SET_USER_LOGIN = "setvideoPlaylist";

export function reducer(state, { type, currentUser, loginValue }) {
  const { isUserLogin, user } = state;

  switch (type) {
    case SET_USER:
      return {
        ...state,
        user: currentUser
      };
    case SET_USER_LOGIN:
      return {
        ...state,
        isUserLogin: loginValue
      };
    default:
      return state;
  }
}

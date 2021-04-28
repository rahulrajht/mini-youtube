import firebase from "../config/firebase-config";
export default function socailMediaAuth(provider) {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((response) => {
      return response.user;
    })
    .catch((err) => {
      return err;
    });
}

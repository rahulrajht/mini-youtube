import React from "react";
import "./css/account.css";
import firebase from "./config/firebase-config";
import socailMediaAuth from "./service/authserviceprovider";
export default function Account() {
  async function handleSignIN() {
    const res = await socailMediaAuth(new firebase.auth.GoogleAuthProvider());
    console.log(res);
  }
  return (
    <section className="form-container">
      <div className="form">
        <img
          className="img"
          src="https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg"
          alt="Google"
        />
        <button onClick={handleSignIN}>Sign in</button>
      </div>
    </section>
  );
}

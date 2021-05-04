import React, { useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./css/account.css";

import { useAuth } from "./context/AuthProvider";

export default function Login() {
  const { Login, dispatchData } = useAuth();
  const emailRef = useRef();
  const passRef = useRef();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const SET_USER = "setUser";

  async function HandleLogin() {
    try {
      setLoading(true);
      setError("");
      const result = await Login(emailRef.current.value, passRef.current.value);

      localStorage.setItem("token", JSON.stringify(result.data.token));
      localStorage.setItem("email", JSON.stringify(result.data.email));
      localStorage.setItem("name", JSON.stringify(result.data.name));
      localStorage.setItem("isUserLogin", JSON.stringify(true));

      dispatchData({
        type: SET_USER,
        currentUser: result.data.email
      });
      history.push(location.state.from);
    } catch {
      setError("Failed to Log In");
    }
    setLoading(false);
  }

  return (
    <section className="form-container">
      <div className="form">
        {error && <div className="alert-d">{error}</div>}
        <input ref={emailRef} type="email" name="email" placeholder="Email" />

        <input
          ref={passRef}
          type="password"
          name="Password"
          placeholder="Password"
        />
        <button disabled={isLoading} onClick={HandleLogin}>
          {isLoading ? "Log In ..." : "Log In"}
        </button>
        <Link to="/account"> New Here? Sign Up </Link>
      </div>
    </section>
  );
}

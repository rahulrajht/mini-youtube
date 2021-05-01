import React, { useRef, useState } from "react";
import "./css/account.css";
import { useAuth } from "./context/AuthProvider";
import { Link, useHistory } from "react-router-dom";

export default function Account() {
  const { SignUp } = useAuth();
  const [isLoading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  const nameRef = useRef();

  const history = useHistory();

  async function handleSignIN() {
    setLoading(true);
    setErr(null);

    try {
      const response = await SignUp(
        nameRef.current.value,
        emailRef.current.value,
        passRef.current.value
      );
      if (response.status === 200) {
        history.push("/login");
      }
    } catch (err) {
      setErr("Something went wrong");
    }

    setLoading(false);
  }
  return (
    <section className="form-container">
      <div className="form">
        {err && <div className="alert-d">{err}</div>}
        <img
          className="img"
          src="https://1000logos.net/wp-content/uploads/2016/11/New-Google-Logo.jpg"
          alt="Google"
        />
        <input ref={nameRef} type="name" name="name" placeholder="Name" />

        <input ref={emailRef} type="email" name="email" placeholder="Email" />

        <input
          ref={passRef}
          type="password"
          name="Password"
          placeholder="Password"
        />
        <button disabled={isLoading} onClick={handleSignIN}>
          {isLoading ? "Sign in ..." : "Sign in"}
        </button>
        <Link to="/login"> Already Have an Account? Log In </Link>
      </div>
    </section>
  );
}

import React from "react";
import "./Login.css";

//redirection

import { useNavigate } from "react-router-dom";

import { auth, provider } from "../firebase/firebaseConfig";
import { signInWithPopup } from "firebase/auth";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      navigate("/");
    });
  };

  return (
    <div className="login-section">
      <p className="title">please sign in with google </p>
      <button className="login-with-google-btn " onClick={signInWithGoogle}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;

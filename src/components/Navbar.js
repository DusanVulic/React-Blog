import React, { useState, useRef, useEffect } from "react";
//import style from navbar css

import "./Navbar.css";
//import links data
import { Link } from "react-router-dom";

/// logout function

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

//redirection

import { useNavigate } from "react-router-dom";

const Navbar = ({ isAuth, setIsAuth }) => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const showLinksHandler = () => {
    setShowLinks(!showLinks);
  };

  //create navigate
  const navigate = useNavigate();

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight + 15}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);

  // sign out user

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <h2>blog logo</h2>
          <div
            className={`${showLinks ? "menu-toggle is-active" : "menu-toggle"}`}
            onClick={() => showLinksHandler()}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>

        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <>
              <li>
                {!isAuth ? (
                  <Link
                    to="/login"
                    className="nav-link"
                    onClick={() => setShowLinks(false)}
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    className="btn"
                    onClick={() => {
                      setShowLinks(false);
                      signUserOut();
                    }}
                  >
                    Logout
                  </button>
                )}
              </li>
            </>
            <>
              <li>
                {isAuth && (
                  <Link
                    to="/"
                    className="nav-link"
                    onClick={() => setShowLinks(false)}
                  >
                    Home
                  </Link>
                )}
              </li>

              <li>
                {isAuth && (
                  <Link
                    to="/create"
                    className="nav-link"
                    onClick={() => setShowLinks(false)}
                  >
                    Create Blog
                  </Link>
                )}
              </li>
            </>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Navbar from "./components/Navbar";

import { useState } from "react";

/// in case that I transfer all this to context
// in order to avoid prop drilling
// router is gonna complain that I can't useNavigate outside the router
// so instead of usin navigate should use code below inside of my function where I wanna be redirected

//window.location.pathname = "/login";

const loggedUserAuth = () => {
  return localStorage.getItem("isAuth");
};

function App() {
  const [isAuth, setIsAuth] = useState(loggedUserAuth());

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/create" element={<CreatePost isAuth={isAuth} />} />
        {!isAuth && (
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;

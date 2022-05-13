import React, { useEffect } from "react";

//navigate to home page or redirect to login

import { useNavigate } from "react-router-dom";

const Home = ({ isAuth }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });

  return <div> Home </div>;
};

export default Home;

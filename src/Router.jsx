import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameOne from "./pages/GameOne";
import GameTwo from "./pages/GameTwo";
import GameThree from "./pages/GameThree";
import ErrorPage from "./pages/ErrorPage";
import HighScore from "./pages/HighScore";

// import Team from "./pages/Team";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// import Update from "./pages/Update";
// import Create_Post from "./pages/Create_Post";

// import Read_Post from "./pages/Read_Post";

// import Edit_Post from "./pages/Edit_Post";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/game-one" element={<GameOne />} />
        <Route path="/game-two" element={<GameTwo />} />
        <Route path="/game-three" element={<GameThree />} />
        <Route path="/high-score" element={<HighScore />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

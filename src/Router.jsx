import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GameOne from "./pages/GameOne";
import ErrorPage from "./pages/ErrorPage";

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
        {/* <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/update" element={isLoggedIn ? <Update /> : <Home />} /> */}
        {/* <Route path="/logout" element={<Testimonials />} /> */}
        {/* <Route path="/new_post" element={isLoggedIn ? <Create_Post /> : <Login />} />
        <Route path="/post/:postId" element={isLoggedIn ? <Read_Post /> : <Login />} />
        <Route path="/editpost/:postId" element={isLoggedIn ? <Edit_Post /> : <Login />} />
        <Route path="/products/:productId" element={<Home />} />*/}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

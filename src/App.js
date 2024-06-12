import React from "react";
import "./app.scss";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Business from "./Components/Business";
import CircleAnimation from "./Components/CircleAimation";
import Home from "./Components/Home";
import HorizontalScroll from "./Components/HorizontalScroll";
import Distribution from "./Components/Distribution";
import Controls from "./Components/Control";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/business" element={<Business />} />
      </Routes>
      <CircleAnimation />
      <Home />
      <HomePage />
      <HorizontalScroll />
      <Distribution />
      <Controls />
    </div>
  );
};

export default App;

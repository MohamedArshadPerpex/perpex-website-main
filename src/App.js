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
import Feature from "./Components/Feature";
import STTop from "./Components/STTop";
import Footer from "./Components/Footer";
import DashboardPreview from "./Components/DashboardPreview";
import Analytics from "./Components/Analytics";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <CircleAnimation />
      <Home />
      {/* <HomePage /> */}
      <HorizontalScroll />
    </div>
  );
};

export default App;

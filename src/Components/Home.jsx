import React, { useState, useEffect } from "react";
import styled from "styled-components";
import videos from '../Images/bg03.mp4';
import { gsap, Expo } from "gsap";
import '../Styles/home.scss';
import '../Styles/BackgroundVideo.scss';

function Home() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) =>
        counter < 100
          ? counter + 1
          : (clearInterval(count), setCounter(100), reveal())
      );
    }, 25);
  }, []);

  const reveal = () => {
    const t1 = gsap.timeline({
      onComplete: () => {
        console.log("completed");
      },
    });
    t1.to(".Follow", {
      width: "100%",
      ease: Expo.easeInOut,
      duration: 1.2,
      delay: 0.7,
    })
      .to(".hide", { opacity: 0, duration: 0.3 })
      .to(".hide", { display: "none", duration: 0.3 })
      .to(".Follow", {
        height: "100%",
        ease: Expo.easeInOut,
        duration: 0.7,
        delay: 0.5,
      })
      .to(".Content", { width: "100%", ease: Expo.easeInOut, duration: 0.7 })
      .to(".Title", { display: "block", duration: 0.1 })
      .to(".Title", {
        opacity: 1,
        stagger: 0.15,
        ease: Expo.easeInOut,
        duration: 0.6,
      });
  };
  

  return (
    <div className="AppContainer">
      <div className="Loading">
        <div className="Follow"></div>
        <div className="ProgressBar" style={{ width: counter + "%" }}></div>
        <p className="Count">{counter}%</p>
      </div>

      <div className="Content">    
      <h1>A Corporate Training?</h1><br />
      <h1>Are You Looking For <span>A Sales Team?</span></h1><br />
      <h1>₹50,000 Salary</h1>
      </div>
    </div>
  );
}

export default Home;

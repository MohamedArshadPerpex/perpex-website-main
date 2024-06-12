import React, { useEffect } from "react";
import "../Styles/home.scss";
import TreeLeft from '../Images/tree-left.png';
import TreeRight from '../Images/tree-right.png';
import GateLeft from '../Images/gate-left.png';
import GateRight from '../Images/gate-right.png';
import Grass from '../Images/grass.png';

const Home = () => {
  useEffect(() => {
    const text = document.getElementById('text');
    const treeLeft = document.getElementById('tree-left');
    const treeRight = document.getElementById('tree-right');
    const gateLeft = document.getElementById('gate-left');
    const gateRight = document.getElementById('gate-right');

    const handleScroll = () => {
      let value = window.scrollY;
      text.style.marginTop = value * 1.5 + 'px';
      treeLeft.style.left = value * -1.5 + 'px';
      treeRight.style.left = value * 1.5 + 'px';
      gateLeft.style.left = value * 0.5 + 'px'
     gateRight.style.left = value * -0.5 + 'px'
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="app-home" id="home">
      <section className="parallax">
        <h2 id="text">Welcome To Perpex</h2>
        <img src={TreeLeft} alt="Tree Left" id="tree-left" />
        <img src={TreeRight} alt="Tree Right" id="tree-right" />
        <img src={GateLeft} alt="Gate Left" id="gate-left" />
        <img src={GateRight} alt="Gate Right" id="gate-right" />
        <img src={Grass} alt="Grass" id="grass" />
      </section>
    </div>
  );
};

export default Home;

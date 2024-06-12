import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/distribution.scss";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { BsApple } from "react-icons/bs";
import { twophones } from "../Images"; // Ensure this image path is correct
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Distribution = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const list = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
    },
  };
  
  const item1 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: -100,
    },
  };
  
  const item2 = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
        delay: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      x: 100,
    },
  };

  return (
    <div className="app__distribution">
      <motion.div
        ref={ref}
        animate={control}
        variants={list}
        className="distribution__container"
      >
        <motion.div variants={item1} className="left__distribution">
          <div className="distribution__text">
            <h1>So Why Are You Here?</h1>
            <Link to="/business">Looking to Upskill My Career?</Link>
            <Link to="">Looking to Organize My Business?</Link>
          </div>
          <div className="distribution__buttons">
          </div>
        </motion.div>
        <motion.div variants={item2} className="right__distribution">
          <img src={twophones} alt="Two Phones" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Distribution;

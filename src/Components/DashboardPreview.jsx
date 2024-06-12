import React, { useEffect } from "react";
import "../Styles/dashboardPreview.scss";
import { dashboard } from "../Images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Background from "./Background";

const DashboardPreview = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.5, // Adjust threshold as needed
    triggerOnce: false, // Keep checking if the element is in view
  });

  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <>
    <motion.div
      ref={ref}
      initial="hidden"
      variants={variants}
      animate={control}
      className="app__dashboard"
    >
      
      <h1>A Corporate Training?</h1><br />
      <h1>Are You Looking For <span>A Sales Team?</span></h1><br />
      <h1>₹50,000 Salary</h1>
    </motion.div>
    </>
  );
};

export default DashboardPreview;

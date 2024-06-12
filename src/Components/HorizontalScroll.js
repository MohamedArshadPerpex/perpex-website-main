import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import DashboardPreview from './DashboardPreview';
import Analytics from './Analytics';
import Feature from './Feature';
import Distribution from './Distribution';
import HomePage from './HomePage'; // Import HomePage
import '../Styles/scroll.scss';
import Footer from './Footer';
import STTop from './STTop';
import ParticlesComponent from "./ParticlesComponent"; // Import ParticlesComponent
import Control from './Control';

function HorizontalScroll() {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const sectionsCount = 5; // Adjust this value based on the number of sections
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: `-${sectionsCount * 100}vw`,
        ease: 'none',
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: `+=${sectionsCount * 1000}`,
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill(); // Kill the animation on component unmount
    };
  }, []);

  return (
    <div className="scroll-container">
      <section className="scroll-section-outer">
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner">
            <div className="scroll-section">
              <DashboardPreview />
            </div>
            <div className="scroll-section">
              <Analytics />
            </div>
            <div className="scroll-section">
              <Feature />
            </div>
            <div className="vertical-section">
              <Distribution />
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default HorizontalScroll;

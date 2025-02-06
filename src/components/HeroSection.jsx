import React from "react";
import "./../styles/heroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="animated-text">
            <span className="highlight">Seamless</span> Visa
          </span>
          <span className="animated-text">
            Solutions for Your
          </span>
          <span className="animated-text">
            <span className="highlight">Global Journey!</span>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;
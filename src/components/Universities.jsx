import React from "react";
import "./../styles/universities.css";

// Import flag images
// import FinlandFlag from "./../assets/flags/finland.png";
// import UKFlag from "./../assets/flags/uk.png";
// import USAFlag from "./../assets/flags/usa.png";
// import GermanyFlag from "./../assets/flags/germany.png";

const Universities = () => {
  return (
    <section className="universities-section">
      <div className="section-header">
        <h2>
          <span className="divider"></span>
          Meet the Universities
        </h2>
        <div className="navigation-buttons">
          <button className="nav-btn prev">
            <i>&#8592;</i>
          </button>
          <button className="nav-btn next">
            <i>&#8594;</i>
          </button>
        </div>
      </div>
      <div className="universities-container">
        <div className="university">
          {/* <img src={FinlandFlag} alt="Finland" /> */}
          <p>Finland</p>
        </div>
        <div className="university">
          {/* <img src={UKFlag} alt="United Kingdom" /> */}
          <p>United Kingdom (UK)</p>
        </div>
        <div className="university">
          {/* <img src={USAFlag} alt="United States of America" /> */}
          <p>United States Of America</p>
        </div>
        <div className="university">
          {/* <img src={GermanyFlag} alt="Germany" /> */}
          <p>Germany</p>
        </div>
      </div>
    </section>
  );
};

export default Universities;

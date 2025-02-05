import React from "react";
import "./../styles/universities.css";

// Import flag images
import finland from "../assets/finland.jpg";
import uk from "../assets/uk.png";
import us from "../assets/us.png";
import germany from "../assets/germany.jpg";

const Universities = () => {
  return (
    <section className="universities-section">
      <div className="section-header">
        <h2>
          <span className="divider"></span>
          Meet the Universities
        </h2>
      </div>

      {/* Ensures logos are in a horizontal layout */}
      <div className="universities-container">
        <div className="university">
          <div className="university-logo">
            <img src={finland} alt="Finland" />
          </div>
          <p>Finland</p>
        </div>
        <div className="university">
          <div className="university-logo">
            <img src={uk} alt="United Kingdom" />
          </div>
          <p>United Kingdom (UK)</p>
        </div>
        <div className="university">
          <div className="university-logo">
            <img src={us} alt="United States of America" />
          </div>
          <p>United States Of America</p>
        </div>
        <div className="university">
          <div className="university-logo">
            <img src={germany} alt="Germany" />
          </div>
          <p>Germany</p>
        </div>
      </div>
    </section>
  );
};

export default Universities;

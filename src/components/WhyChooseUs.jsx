import React from "react";
import "./../styles/whyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-container">
      <h2 className="why-choose-title">Why Choose Us?</h2>

      <p className="why-choose-content">
        Genius Gateways stands out for its expertise, quick processing, and
        reliable document attestation and visa stamping services. With a team of
        skilled professionals, modern technology, and a customer-focused approach,
        we ensure secure, hassle-free legalization for individuals and businesses
        across India.
      </p>

      <div className="stats-container">
        <div className="stat-box">
          <h3>2.5 Lac</h3>
          <p>Applications</p>
        </div>

        <div className="stat-box">
          <h3>3000+</h3>
          <p>Visas</p>
        </div>

        <div className="stat-box">
          <h3>50K+</h3>
          <p>Students</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

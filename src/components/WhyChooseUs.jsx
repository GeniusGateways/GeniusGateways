import React, { useState, useEffect } from "react";
import "./../styles/whyChooseUs.css";

const Counter = ({ target, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 50);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(interval);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [target, duration]);

  return <h3 className="stat-number">{count.toLocaleString()}</h3>;
};

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

      {/* Stats Section with Incrementing Counter */}
      <div className="stats-container">
        <div className="stat-box">
          <Counter target={250000} duration={2000} />
          <p className="stat-text">Applications</p>
        </div>

        <div className="stat-box">
          <Counter target={3000} duration={2000} />
          <p className="stat-text">Visas</p>
        </div>

        <div className="stat-box">
          <Counter target={50000} duration={2000} />
          <p className="stat-text">Students</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

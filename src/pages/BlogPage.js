import React from "react";
import "./../styles/blogPage.css";
// import consultationImage from "./../assets/consultation.jpg";
// import documentPreparationImage from "./../assets/document-preparation.jpg";
// import trackingUpdatesImage from "./../assets/tracking-updates.jpg";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (

    <>
    <Header />
    <HeroSection />
    
    
    <section className="blog-section">
      {/* Blog Header */}
      <div className="blog-header">
        <h1>Blog</h1>
        <span className="underline"></span>
      </div>

      {/* Blog Cards */}
      <div className="blog-cards">
        {/* Blog Card 1 */}
        <div className="blog-card">
          <div className="blog-image">
            {/* <img src={consultationImage} alt="Consultation and Guidance" /> */}
          </div>
          <div className="blog-content">
            <h2>Consultation and Guidance</h2>
            <p>
              Providing expert advice on country-specific study visa requirements and immigration laws, guiding applicants through the process, ensuring compliance, and offering tailored support for successful applications and seamless relocation.
            </p>
            <a href="#" className="read-more">Read more &rarr;</a>
          </div>
        </div>

        {/* Blog Card 2 */}
        <div className="blog-card">
          <div className="blog-image">
            {/* <img src={documentPreparationImage} alt="Document Preparation" /> */}
          </div>
          <div className="blog-content">
            <h2>Document Preparation</h2>
            <p>
              Helping collect and verify key documents, including admission letters, financial statements, and medical certificates, ensuring all paperwork is accurate, complete, and meets the required standards for submission.
            </p>
            <a href="#" className="read-more">Read more &rarr;</a>
          </div>
        </div>

        {/* Blog Card 3 */}
        <div className="blog-card">
          <div className="blog-image">
            {/* <img src={trackingUpdatesImage} alt="Tracking and Updates" /> */}
          </div>
          <div className="blog-content">
            <h2>Tracking and Updates</h2>
            <p>
              Tracking visa application progress and offering timely updates to students, ensuring they stay informed about their application status and any necessary actions required throughout the process.
            </p>
            <a href="#" className="read-more">Read more &rarr;</a>
          </div>
        </div>
      </div>
    </section>


    <Footer />
  </>
  );
};

export default BlogPage;

import React from "react";
import "./../styles/studyVisa.css";
// import usaStudent from "./../assets/usa-student.jpg";
// import germanyStudent from "./../assets/germany-student.jpg";
// import ukStudent from "./../assets/uk-student.jpg";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";


const StudyVisaPage = () => {
  return (

    <>
    <Header />
    <HeroSection />
    
    
    <section className="study-visa">
      {/* Section Header */}
      <div className="section-header">
        <h1>Study Visa</h1>
        <span className="underline"></span>
      </div>

      {/* Study in the USA */}
      <div className="study-section">
        <div className="text-content">
          <h2>Study in the USA Overview</h2>
          <p>
            Studying in the USA offers a wealth of opportunities for international students, including access to world-class education, diverse cultural experiences, and extensive resources.
          </p>
          <h3>Benefits</h3>
          <ul>
            <li><strong>Quality Education:</strong> The USA is home to many prestigious universities and colleges known for their academic excellence and innovative research.</li>
            <li><strong>Diverse Programs:</strong> A wide range of courses and degrees are available across various fields, allowing students to find programs that match their interests.</li>
            <li><strong>Cultural Exposure:</strong> Studying in the USA provides the chance to experience a rich cultural tapestry, with students from around the world.</li>
            <li><strong>Career Opportunities:</strong> Graduating from a US institution can enhance job prospects globally, as many employers value a US education.</li>
          </ul>
        </div>
        <div className="image-content">
          {/* <img src={usaStudent} alt="Study in USA" /> */}
        </div>
      </div>

      {/* Study in Germany */}
      <div className="study-section reverse">
        <div className="image-content">
          {/* <img src={germanyStudent} alt="Study in Germany" /> */}
        </div>
        <div className="text-content">
          <h2>Study in Germany Overview</h2>
          <p>
            Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers).
          </p>
          <h3>Benefits</h3>
          <ul>
            <li><strong>Quality Education:</strong> Germany is home to prestigious universities and institutes, especially renowned for engineering, science, and technology programs.</li>
            <li><strong>Low or No Tuition Fees:</strong> Many public universities offer free or low-cost education, even for international students.</li>
            <li><strong>Diverse Programs:</strong> A broad range of programs taught in English and German ensures students can find suitable courses.</li>
            <li><strong>Cultural and Historical Richness:</strong> Germany provides a unique blend of modern innovation and rich cultural heritage.</li>
            <li><strong>Career Opportunities:</strong> Germany’s strong economy and internship opportunities can pave the way for a successful career.</li>
          </ul>
        </div>
      </div>

      {/* Study in the UK */}
      <div className="study-section">
        <div className="text-content">
          <h2>Study in the UK Overview</h2>
          <p>
            The UK is a top destination for international students, known for its academic excellence, cultural diversity, and historical significance.
          </p>
          <h3>Benefits</h3>
          <ul>
            <li><strong>World-Class Education:</strong> The UK boasts globally recognized universities, such as Oxford, Cambridge, and Imperial College London.</li>
            <li><strong>Shorter Degree Duration:</strong> Undergraduate programs typically last three years, and master's programs one year, saving time and costs.</li>
            <li><strong>Cultural Diversity:</strong> Studying in the UK offers exposure to a vibrant mix of cultures and traditions.</li>
            <li><strong>Global Recognition:</strong> UK degrees are highly regarded by employers worldwide.</li>
            <li><strong>Post-Study Work Opportunities:</strong> The Graduate Route allows students to work in the UK after completing their studies.</li>
          </ul>
        </div>
        <div className="image-content">
          {/* <img src={ukStudent} alt="Study in UK" /> */}
        </div>
      </div>
    </section>

    <Footer />
   </>

  );
};

export default StudyVisaPage;

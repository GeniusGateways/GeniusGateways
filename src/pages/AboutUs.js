import React from "react";

import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutUs from "../components/AboutUs";
import WhyChooseUs from "../components/WhyChooseUs" 
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";




const About = () => {
    return (
        <>
            <div className="main-container">
                <Header />
                <HeroSection />
            </div>
            <AboutUs />
            <WhyChooseUs />
            <Testimonials />
            <Footer />
        </>
    ); 
};


export default About;
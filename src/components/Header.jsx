import React, { useState } from "react";
import "./../styles/header.css";
import logo from "../assets/logo.png";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <h2 className="logo">GENIUS GATEWAYS</h2>
      </div>
      <nav className={`nav-links ${isSidebarOpen ? "open" : ""}`}>
        <a href="home">Home</a>
        <a href="about">About Us</a>
        <a href="study">Study Visa</a>
        <a href="blog">Blog</a>
        <a href="mbbs">MBBS</a>
        <a href="contactus" className="btn-contact">Contact</a>
      </nav>
      <div className="hamburger" onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Sidebar for Mobile Navigation */}
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <a href="home" onClick={toggleSidebar}>Home</a>
        <a href="about" onClick={toggleSidebar}>About Us</a>
        <a href="study" onClick={toggleSidebar}>Study Visa</a>
        <a href="blog" onClick={toggleSidebar}>Blog</a>
        <a href="mbbs" onClick={toggleSidebar}>MBBS</a>
        <a href="contactus" className="btn-contact" onClick={toggleSidebar}>Contact</a>
      </div>
    </header>
  );
};

export default Header;

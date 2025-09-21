import React from "react";
import "./Hero.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Icon */}
        <div className="hero-icon">⚛️</div>

        {/* Name + Title */}
        <h1 className="hero-name">Sharad Kharat</h1>
        <h2 className="hero-role">Frontend Developer</h2>

        {/* Description */}
        <p className="hero-description">
          3+ years of experience building dynamic, responsive, and scalable web
          applications with React.js, Next.js, and modern JavaScript
          technologies.
        </p>

        {/* Contact Info */}
        <div className="hero-info">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <span>Pune, India</span>
          </div>
          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <span>+91 9067785123</span>
          </div>
          <div className="info-box">
            <FaEnvelope className="icon" />
            <span>sharadkharat214@gmail.com</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="https://linkedin.com" className="hero-btn linkedin">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://github.com" className="hero-btn github">
            <FaGithub /> GitHub
          </a>
          <a href="#contact" className="hero-btn contact">
            <FaEnvelope /> Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

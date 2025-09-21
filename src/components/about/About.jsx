import React from "react";
import "./About.css";
import {FaRegCircle, FaGraduationCap } from "react-icons/fa";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        {/* Section Title */}
        <h2 className="about-title">About Me</h2>

        {/* About Me Description */}
        <p className="about-description">
          I'm a passionate Frontend Developer with 3 years of hands-on experience in building dynamic, responsive, and scalable web applications. I specialize in modern JavaScript (ES6+), React.js, and Next.js with a strong focus on component-based architecture, state management, and performance optimization.<br />

Throughout my career, I've worked on diverse projects ranging from inventory management systems to healthcare applications, always focusing on delivering high-quality, maintainable code within deadlines. I'm experienced in integrating RESTful APIs, building reusable UI components, and working in Agile environments
        </p>

        {/* What I Do */}
        <div className="what-i-do">
          <h3>What I Do</h3>
          <ul>
            <li><FaRegCircle className="icon" /> Build responsive web applications using React.js and Next.js</li>
            <li><FaRegCircle className="icon" /> Integrate REST APIs and handle state management with Redux</li>
            <li><FaRegCircle className="icon" /> Create reusable and modular UI components with Material UI and Tailwind CSS</li>
            <li><FaRegCircle className="icon" /> Optimize web performance and improve SEO</li>
            <li><FaRegCircle className="icon" /> Collaborate with designers and backend developers for full-stack solutions</li>
          </ul>
        </div>

        {/* Education */}
        <div className="education">
          <span className="education-title" >B.Tech</span>
          <div className="edu-box">
            <FaGraduationCap className="icon" />
            <span>Bachelor of Engineering in Mechanical Engineering, Amaravati University</span>
          
          </div>
              <div className="percentage">81%</div>
        </div>
        
      </div>
    </section>
  );
};

export default About;

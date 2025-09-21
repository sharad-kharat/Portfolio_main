import React from 'react';
import './ContinuousLearning.css';

const skills = [
  "Next.js",
  "TypeScript",
  "GraphQL",
  "Testing",
  "Performance Optimization"
];

const ContinuousLearning = () => {
  return (
    <section className="continuous-learning-section">
      <div className="continuous-learning-container">
        <h3>Continuous Learning</h3>
        <p className="continuous-learning-text">
          I'm committed to staying updated with the latest technologies and best practices in frontend development. Currently pursuing advanced certifications in React, Next.js, and modern web development.
        </p>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <span key={index} className="skill-pill">{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContinuousLearning;

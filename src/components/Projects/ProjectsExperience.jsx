import React from 'react';
import './ProjectsExperience.css';

import projects from './ProjectsDeta'

const ProjectsExperience = () => (
  <section className="projects-experience-section">
    <h2 className="projects-experience-title">Projects & Experience</h2>
    <div className="projects-experience-list">
      {projects.map((proj, idx) => (
        <div className="project-card" key={idx}>
          <div className="project-header">
            <h3>{proj.title}</h3>
            <span>{proj.company} &nbsp; | &nbsp; {proj.period}</span>
          </div>
          <p className="project-description">{proj.description}</p>
          <div className="project-features">
            <ul>
              {proj.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="project-technologies">
            <span>Technologies Used:</span>
            {proj.technologies.map((tech, j) => (
              <span className="tech-pill" key={j}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ProjectsExperience;

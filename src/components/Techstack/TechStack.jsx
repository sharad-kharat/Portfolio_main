import React from 'react';
import './TechStack.css'; // Import the CSS file

const techStacks = [
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    color: "#00cfff"
  },
  {
    title: "Styling",
    items: ["Tailwind CSS", "Bootstrap", "Material UI","SCSS"],
    color: "#ea2fff"
  },
  {
    title: "State Management",
    items: ["Redux", "Context API"],
    color: "#15e483"
  },
  {
    title: "Form Handling",
    items: ["React Hook Form", "Yup"],
    color: "#ff4731"
  },
  {
    title: "API & Backend",
    items: ["RESTful APIs", "Axios", "Fetch"],
    color: "#ff4731"
  },
  {
    title: "Tools & DevOps",
    items: ["GitHub", "Webpack", "Vite"],
    color: "#9cb0c9"
  },
  {
    title: "CMS & Platforms",
    items: ["Shopify", "WordPress"],
    color: "#ea2fff"
  }
];

const TechStack = () => (
  <div className="tech-stack-section">
    <h2 className="tech-stack-title">Technology Stack</h2>
    <div className="tech-stack-grid">
      {techStacks.map((stack, idx) => (
        <div className="tech-card" key={idx}>
          <div className="tech-card-bar" style={{backgroundColor: stack.color}}></div>
          <h3 className="tech-card-title">{stack.title}</h3>
          <ul className="tech-card-list">
            {stack.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default TechStack;

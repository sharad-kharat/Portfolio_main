import { useState, useEffect } from "react";
import './App.css';
import About from './components/about/About';
import ContactMe from './components/Contact Me/ContactMe';
import ContinuousLearning from './components/ContinuousLearning/ContinuousLearning';
import Hero from './components/hero/Hero';
import ProjectsExperience from './components/Projects/ProjectsExperience';
import TechStack from './components/Techstack/TechStack';

function App() {
  // Two separate messages
  const messages = [
    "➡️ Hey! I’m Sharad",
    "We ❤️ turning ideas into reality"
  ];

  const [showWelcome, setShowWelcome] = useState(true);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fade, setFade] = useState(false);

  // Typing effect
  useEffect(() => {
    if (messageIndex >= messages.length) {
      setTimeout(() => setShowWelcome(false), 500);
      return;
    }

    if (charIndex < messages[messageIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentMessage((prev) => prev + messages[messageIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100); // typing speed
      return () => clearTimeout(timeout);
    } else {
      // Message finished, wait 1s, then fade out
      const pause = setTimeout(() => setFade(true), 1000);
      return () => clearTimeout(pause);
    }
  }, [charIndex, messageIndex]);

  // Handle fade out and next message
  useEffect(() => {
    if (fade) {
      const timeout = setTimeout(() => {
        setFade(false);
        setCurrentMessage("");
        setCharIndex(0);
        setMessageIndex(messageIndex + 1);
      }, 500); // fade duration
      return () => clearTimeout(timeout);
    }
  }, [fade]);

  return (
    <>
      {showWelcome ? (
        <div className="welcome-screen">
          <h1 className={`welcome-text ${fade ? "fade-out" : ""}`}>
            {currentMessage}
          </h1>
          <span className="cursor">{!fade ? "" : ""}</span>
        </div>
      ) : (
        <>
          <Hero />
          <About />
          <TechStack />
          <ProjectsExperience />
          <ContinuousLearning />
          <ContactMe />
        </>
      )}
    </>
  );
}

export default App;

import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const SkillBadge = ({ skill, index }) => {
  return (
    <span className="skill" style={{animationDelay: `${index * 0.1 + 0.5}s`}}>
      {skill}
    </span>
  );
};

SkillBadge.propTypes = {
  skill: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
};

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const skills = ['Azure', 'Infrastructure as Code', 'DevOps', 'Cloud Architecture', 'Platform Engineering'];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`app ${isVisible ? 'visible' : ''}`}>
      <div className="background">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <main>
        <h1>
          <span className="name">Lewis</span>
          <span className="in">in the</span>
          <span className="cloud">Cloud</span>
        </h1>
        <p className="tagline">Azure Infrastructure Engineer</p>
        <div className="skills">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill} index={index} />
          ))}
        </div>
      </main>
      <footer>
        <a href="https://github.com/lewismclean" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/lewismcleanin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </div>
  );
}

export default App;
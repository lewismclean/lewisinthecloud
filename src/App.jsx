import './App.css';

function App() {
  return (
    <div className="app">
      <main>
        <h1>
          <span className="name">Lewis</span>
          <span className="in">in the</span>
          <span className="cloud">Cloud</span>
        </h1>
        <p className="tagline">Azure Infrastructure Engineer</p>
        <div className="skills">
          <span className="skill">Azure</span>
          <span className="skill">Infrastructure as Code</span>
          <span className="skill">DevOps</span>
          <span className="skill">Cloud Architecture</span>
          <span className="skill">Platform Engineering</span>
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
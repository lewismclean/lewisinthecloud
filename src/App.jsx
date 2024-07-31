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
        </div>
      </main>
      <footer>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:your.email@example.com">Email</a>
      </footer>
    </div>
  );
}

export default App;
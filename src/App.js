import logo from './logo.svg';
import './App.css';

function App() {
  const backgroundColour = process.env.REACT_APP_backgroundcolour || "yellow";
  return (
    <div className="App" style={{background: backgroundColour}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

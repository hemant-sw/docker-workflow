import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
          Learn React with me aka (hemantsw)
        </a>
        <p>{`hello ${process.env.REACT_APP_NAME} `}</p>
        <p>{`eating ${process.env.CHINESE_FOOD}`}</p>
      </header>
    </div>
  );
}

export default App;

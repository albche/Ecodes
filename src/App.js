import logo from './logo.svg';
import { useSearchParams } from 'react-router-dom';
import './App.css';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  var curId = searchParams.get("id")
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {curId}
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

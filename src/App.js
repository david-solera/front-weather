import logo from './logo.svg';
import './App.css';
import Home from './views/home';
import Cities from './views/cities';
import {Switch,Route} from "react-router-dom";

/*
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
          Vamossss
        </a>
      </header>
    </div>
  );
}*/

function App() {
  return (
    <div>
      <Switch>
        <Route path="/cities">
          <Cities />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

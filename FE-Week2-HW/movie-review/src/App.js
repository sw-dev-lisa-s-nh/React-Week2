import React from 'react';
import Container from './components/container';

function App() {

  let globalState = {
    id: 1,
    text: "Movie",
    movies: []
  }

  return (
    <div className="App container">
      <Container globalState={globalState} />

      {/* <header className="App-header">
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
      </header>*/}
    </div>
  );
}

export default App;

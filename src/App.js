import { createBrowserHistory } from 'history';
import React from 'react';
import './App.css';
import Routes from './Routes';

const history = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Routes history={ history } />
    </div>
  );
}

export default App;

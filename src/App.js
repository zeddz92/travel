import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './Routes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;

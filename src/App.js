import React, { Component } from 'react';
import './App.css';
import StorePage from './StorePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="storeTitle">Store App</h1>
        <StorePage />
      </div>
    );
  }
}

export default App;

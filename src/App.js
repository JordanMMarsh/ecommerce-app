import React, { Component } from 'react';
import './App.css';
import StorePage from './StorePage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Store Page</h1>
        <StorePage />
      </div>
    );
  }
}

export default App;

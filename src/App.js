import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import Graph from './Graph.js';

class App extends Component {
  state = { formula: '' }

  graphFormula = (newFormula) => {
    this.setState({ formula: newFormula});
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.graphFormula} />
        <Graph />
      </div>
    );
  }
}

export default App;

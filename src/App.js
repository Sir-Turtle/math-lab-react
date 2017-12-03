import React, { Component } from 'react';
import './App.css';
import Form from './Form.js';
import Graph from './Graph.js';

class App extends Component {
  state = {
    formula: '',
    submitClicked:false 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({submitClicked: true});
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.formula}
            onChange={(event) => this.setState({ formula: event.target.value })}
            placeholder="math formula" required />
          <button type="submit">plot graph</button>
        </form>
        <Graph formula={this.state.formula} submitClicked={this.state.submitClicked}/>
      </div>
    );
  }
}

export default App;

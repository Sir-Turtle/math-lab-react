import React, { Component } from 'react';
import './App.css';
import Graph from './components/Graph.js';
import math from 'mathjs';
import $ from 'jquery';

class App extends Component {
  state = {
    formula: '',
    graphData: null,
    graphWidth: 500,
    graphHeight: 300
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateGraphData();
  };

  updateGraphData() {
    var newData = [];
    let currentX = 0; 
    let xRange = 10;
    for (var x = currentX; x < xRange; x++) {
      if (!this.state.formula) {
        continue;
      }
      var currentFormulaResult = this.state.formula;
      currentFormulaResult = currentFormulaResult.replace("x", x);

      newData.push({
        "xValue": x,
        "yValue": math.eval(currentFormulaResult)
      });
      x++;
    }
    this.setState({graphData: newData})
  }

  componentWillMount(){
    this.setState({ graphHeight: $(window).height() * .80});
    this.setState({ graphWidth: $(window).width() * .80});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group col-lg-2">
              <label>Formula: </label>
              <input type="text"
                value={this.state.formula}
                onChange={(event) => this.setState({ formula: event.target.value })}
                placeholder="e.g. x+1, sin(x)" className="form-control" required/>
              <button type="submit" className="btn btn-default">plot graph</button>
            </div>
          </div>  
        </form>
        <div className="row">
          <Graph graphData={this.state.graphData} width={this.state.graphWidth} height={this.state.graphHeight}/>
        </div>
      </div>
    );
  }
}

export default App;

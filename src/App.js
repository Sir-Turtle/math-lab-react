import React, { Component } from 'react';
import './App.css';
import Graph from './components/Graph.js';
import math from 'mathjs';
import $ from 'jquery';

class App extends Component {
  state = {
    formula: '',
    graphData: null,
    graphWidth: null,
    graphHeight: null,
    xRange: 10
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateGraphData();
  };

  updateGraphData() {
    let newData = [];
    let currentX = 0; 
    let xRange = this.state.xRange;
    let y;
    let currentFormulaResult;

    for (let x = currentX; x < xRange; x++) {
      currentFormulaResult = this.state.formula.replace(/x/g, x)

      try {
        y = math.eval(currentFormulaResult)
      } catch (exception){
       alert("Please enter a valid formula and try again.");
       break;
      }

      newData.push({
        "xValue": x,
        "yValue": y
      });
      
      x++;
    }
    this.setState({graphData: newData})
  }

  componentWillMount(){
    this.setState({ graphHeight: $(window).height() * .6});
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
          <div className="row">
            <div className="form-group col-lg-2">
              <label>x: </label>
              <input type="text"
                value={this.state.xRange}
                onChange={(event) => this.setState({ xRange: event.target.value })}
                className="form-control"/>
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

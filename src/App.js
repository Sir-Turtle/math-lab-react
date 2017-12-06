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
    xUpperLimit: 10,
    xLowerLimit: -10
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.updateGraphData();
  };

  updateGraphData() {
    let newData = [];
    let lowerX = this.state.xLowerLimit; 
    let upperX = this.state.xUpperLimit;
    let y;
    let currentFormulaResult;

    for (let x = lowerX; x < upperX; x++) {
      currentFormulaResult = this.state.formula.toLowerCase().replace(/x/g, x)

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
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="control-group form-group col-xs-11 col-sm-6 col-lg-4">
              <label className="control-label">Formula: </label>
              <div className="input-group">
                <input type="text"
                  value={this.state.formula}
                  onChange={(event) => this.setState({ formula: event.target.value })}
                  placeholder="e.g. x+1, sin(x)" className="form-control " required/>
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-default">plot graph</button>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-xs-6 col-sm-3 col-lg-2">
              <label>x-axis upper limit: </label>
              <input type="text"
                value={this.state.xUpperLimit}
                onChange={(event) => this.setState({ xUpperLimit: event.target.value })}
                className="form-control"/>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-xs-6 col-sm-3 col-lg-2">
              <label>x-axis lower limit: </label>
              <input type="text"
                value={this.state.xLowerLimit}
                onChange={(event) => this.setState({ xLowerLimit: event.target.value })}
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

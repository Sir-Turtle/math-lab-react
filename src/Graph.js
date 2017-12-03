import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
//import { MathJS } from 'mathjs';
var math = require('mathjs');

class Graph extends React.Component {
  state = {
    currentX: 0,
    xRange: 11,
    data: [],
    dataReady: false,
  }

  updateData(){
    console.log('formula: ', this.props.formula);
    if(!this.props.formula || !this.props.submitClicked){
      console.log('return')
      return;
    }
    var newData = this.state.data; 
    let x = this.state.currentX; 
    let xRange = this.state.xRange;
    console.log('x: ', x);
    console.log('xRange: ', xRange); 
    while(x < xRange) {
      var formulaResult = this.props.formula;
      formulaResult = formulaResult.replace("x", x);
      console.log('formulaResult: ', formulaResult);
      
      newData.push({
        "xValue": x,
        "yValue": math.eval(formulaResult)
      })
      x++
    }
    this.setState({data: newData})
  }

  render() {  
    console.log('data: ', this.state.data);
    //var graphContent = <div>Graph data unavailable :( </div>;
      //if(this.props.submitClicked){
      // if (this.state.dataReady) {
        var graphContent = (<LineChart width={720} height={500} data={this.state.data}>
          <Line type="monotone" dataKey="yValue" stroke="#8884d8" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="xValue" />
          <YAxis dataKey="yValue"/>
        </LineChart>);
//      }
    return (
      <div style={{margin: '1em'}}>
        {graphContent}
      </div>
    );
  }
};

export default Graph;
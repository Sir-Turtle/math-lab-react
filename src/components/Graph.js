import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
class Graph extends React.Component {
  render() {  
    var graphContent = (
      <LineChart width={this.props.width} height={this.props.height} data={this.props.graphData}>
        <Line type="monotone" dataKey="yValue" stroke="#8884d8" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="xValue" />
        <YAxis dataKey="yValue"/>
      </LineChart>
    );
    return (
      <div >
        {graphContent}
      </div>
    );
  }
};

export default Graph;
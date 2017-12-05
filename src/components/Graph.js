import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

function Graph (props) {  
    return (
      <LineChart width={props.width} height={props.height} data={props.graphData}>
        <Line type="monotone" dataKey="yValue" stroke="#8884d8" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="xValue" />
        <YAxis dataKey="yValue"/>
      </LineChart>
    );
};

export default Graph;
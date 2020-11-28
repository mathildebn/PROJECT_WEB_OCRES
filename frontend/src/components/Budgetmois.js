import React from 'react';


import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
      name: 'Janv', uv: 4000, pv: 2400, amt: 2400,
    },
    {
      name: 'Fév', uv: 3000, pv: 1398, amt: 2210,
    },
    {
      name: 'Mars', uv: 2000, pv: 9800, amt: 2290,
    },
    {
      name: 'Avril', uv: 2780, pv: 3908, amt: 2000,
    },
    {
      name: 'Mai', uv: 1890, pv: 4800, amt: 2181,
    },
    {
      name: 'Juin', uv: 2390, pv: 3800, amt: 2500,
    },
    {
      name: 'Juil', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Août', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Sept', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Oct', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Nov', uv: 3490, pv: 4300, amt: 2100,
    },
    {
        name: 'Déc', uv: 3490, pv: 4300, amt: 2100,
    },

  ];

 class BudgMois extends React.Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';
  
    render() {
      return (
        
        <BarChart
          width={800}
          height={300}
          data={data}
          margin={{
            top: 20, right: 5, left: 5, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fill="#8884d8" />
          <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
        </BarChart>
      );
    }
  }
  export default BudgMois
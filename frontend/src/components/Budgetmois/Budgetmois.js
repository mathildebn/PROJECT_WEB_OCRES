import React from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';
import './Budgetmois.css';

const data = [

    {
      name: 'Juin', Nécessités  : 700, Loisirs: 1000, amt: 2500,
    },
    {
      name: 'Juil', Nécessités: 1000, Loisirs: 2000, amt: 2100,
    },
    {
        name: 'Août', Nécessités : 900, Loisirs: 1800, amt: 2100,
    },
    {
        name: 'Sept', Nécessités : 750, Loisirs: 800, amt: 2100,
    },
    {
        name: 'Oct', Nécessités : 700, Loisirs: 700, amt: 2100,
    },
    {
        name: 'Nov', Nécessités : 800, Loisirs: 1000, amt: 2100,
    },

  ];
 class Budgetmois extends React.Component {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/90v76x08/';
  
    render() {
      return (
      <div className="graphe">
        <BarChart
          width={400}
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
          <Bar dataKey="Loisirs" stackId="a" fill="#8884d8" />
          <Bar dataKey="Nécessités" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
      );
    }
  }
  export default Budgetmois;
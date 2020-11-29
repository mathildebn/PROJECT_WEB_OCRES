import React from 'react';
import {PieChart, Pie, Cell,Legend, Bar, ResponsiveContainer} from 'recharts';
import './Budget.css';
  
  const data = [
      { name: 'Courses', value: 400 },
      { name: 'Frais maison', value: 300 },
      { name: 'Transports', value: 300 },
      { name: 'Activités', value: 200 },
      { name: 'Autre', value: 100 },
    ];
    const COLORS = ['#7fc3ff', '#00C49F', '#ff3333', '#ffbb28', '#c0c0c0'];
  
class Budget extends React.Component {
      static jsfiddleUrl = 'https://jsfiddle.net/alidingling/3Leoa7f4/';
      static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';
      
    
      render() {
        return (
        <ResponsiveContainer>
        <div className="pie">
          <PieChart width={280} height={280}>
            <Pie
              data={data}
              cx={120}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
              }
            </Pie>
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
           
          </PieChart>
        </div>
        </ResponsiveContainer>
        );
      }
    }

export default Budget;
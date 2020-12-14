import React from 'react';
import {PieChart, Pie, Cell,Legend, Bar, ResponsiveContainer} from 'recharts';
import Formbudget from './../Formbudget/Formbudget';
import './Budget.css';
import axios from 'axios';

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

      constructor(props){
        super(props);
        this.state = {
          name : "",
          value : "",
          depenses : []
        }
      }

      componentDidMount = () => {
        this.getBudget();
      };

      getBudget = () => {
        axios.get('http://localhost:3001/budget')
        .then((response) => {
          const data = response.data;
          this.setState({depenses:data});
          console.log("data reçue");
          console.log(data);
        })
        .catch(() => {
          console.log("erreur");
        });
      };

      displayBudget = (depenses) => {
        if (!depenses.length) return null;

        return depenses.map((depense,index) => (
          <div key={index}>
            <p>{depense.name}</p>
            <p>{depense.value}</p>
          </div>
        ));
      };
    
      render() {
        return (
        <ResponsiveContainer width="100%" height="100%">
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

        <div>
          {this.displayBudget(this.state.depenses)}
        </div>
        </div>
        </ResponsiveContainer>
        
        );
      }
    }

export default Budget;
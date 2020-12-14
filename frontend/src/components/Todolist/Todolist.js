import React, { useState } from 'react';
import './Todolist.css';
import axios from "axios";

class Todolist extends React.Component {

    constructor(props){
      super(props);
        this.state = {
          task : "",
          listes : []
        }
    }

      componentDidMount = () => {
        this.getTask();
      };


      getTask = () => {
        axios.get('http://localhost:3001/todo')
        .then((response) => {
          const data = response.data;
          this.setState({listes:data});
          console.log("RECEPTION");
          console.log(data);
        })
        .catch(() => {
          console.log("erreur");
        });
      };

      handleChange = ({target}) => {
      const {name, value} = target;

      this.setState({
        [name] : value
      });
    };

    handleAdd= (event) => {
      /*event.preventDefault();
      const newNote = {
        task: task
      }
    axios.post('http://localhost:3001/todo', newNote)
    console.log(newNote);*/
      event.preventDefault();

      const todo = {
        task : this.state.task
      };

      axios({
        url : 'http://localhost:3001/todo',
        method: 'POST',
        data : todo
      })
      .then(() => {
      alert(todo.task + " ajouté !")
      })
      .catch(()=> {
        console.log("Erreur");
      });
    
    }

    handleDel= (event) => {
      event.preventDefault();

      const todo = {
        task : this.state.task2,
      };

      axios({
        url : `http://localhost:3001/todo/${todo.task}`,
        method: 'DELETE',
        data : todo
      })
      .then(() => {
      alert(todo.task + " supprimé !")
      })
      .catch(()=> {
        console.log("Erreur");
      });
    
    }

    handleMaj= (event) => {
      event.preventDefault();

      const modif = {
        task : this.state.task3,
        task_maj : this.state.task4,
      };

      axios({
        url : `http://localhost:3001/todo/${modif.task}`,
        method: 'PUT',
        data : {task : modif.task_maj}
      })
      .then(() => {
      alert(modif.task + " modifié en " + modif.task_maj)
      })
      .catch(()=> {
        console.log("Erreur");
      });
    
    }

      displayTodo = (listes) => {
        if (!listes.length) return null;

        return listes.map((liste,index) => (
          <div key={index}>
            <li>{liste.task}</li>
          </div>
        ));
      };
 

  render() {
    return (
      <div className="formtodo">
        <h2 id="titre">✓ Todo list</h2>
          <form className="ensemble" onSubmit={this.handleAdd}>
              <input onChange = {this.handleChange} className="dot" type="text" name="task" value={this.state.task} placeholder="Ajouter une tâche" />
              <button className="ajout" type="submit">Ajouter</button>
          </form>
          <div className="affichage">
            {this.displayTodo(this.state.listes)}
          </div>

          <form onSubmit={this.handleDel}>
            <input onChange = {this.handleChange} className="dot" type="text" name="task2" value={this.state.task2} placeholder="Supprimer une tâche" />
            <button className="ajout" style={{backgroundColor : "#B50607"}} type="submit">Supprimer</button>
          </form>

          <form onSubmit={this.handleMaj}>
            <input onChange = {this.handleChange} className="dot" type="text" name="task3" value={this.state.task3} placeholder="Tâche à modifier" />
            <input onChange = {this.handleChange} className="dot" type="text" name="task4" value={this.state.task4} placeholder="Modifications apportées" />            
            <button className="ajout" style={{backgroundColor : "#bd7924"}} type="submit">Modifier</button>
          </form>
      </div>
    );
   }
}
 
export default Todolist;
import React, { Component } from 'react';
import Checkbox from './Checkbox';
import './Todolist.css';

    const items = [
  'Manger',
  'Dormir',
  'Travailler',
  'Prendre rdv médecin',
  'Courses de noël'
    ];

class Todolist extends Component {
  //création d'un set
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  //fonction qui est appelée lorsque l'utilisateur check ou uncheck une checkbox
  // label correspond à la checkbox concernée
  toggleCheckbox = label => {

    //si le set checkbox a un label (item) spécifique
    //alors on le supprime du set
    //sinon on le rajoute
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }


  //création des checkboxs pour chaque item
  createCheckbox = label => (
    <Checkbox
      label={label}
      //check ou uncheck de la checkbox
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  )

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  )

  render() {
    return (
      <div className="todo">
        <h2>✓ Todo list</h2>
            <form id="tache">
              {this.createCheckboxes()}
            </form>

          </div>

    );
  }
}

export default Todolist;
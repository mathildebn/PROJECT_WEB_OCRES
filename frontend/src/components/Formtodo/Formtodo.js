import React from 'react';
import './Formtodo.css';

class Formtodo extends React.Component {

	render() {
    return (
      <div className="formtodo">
        <h2>✓ Todo list</h2>
        	<div className="ensemble">
              <input className="dot" type="text" name="name" placeholder="Ajouter une tâche" />

              <button className="ajout">Ajouter</button>
            </div>
      </div>

    );
  }
}

export default Formtodo;
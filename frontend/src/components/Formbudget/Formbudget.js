import React from 'react';
import './Formbudget.css';

class Formbudget extends React.Component {

	render() {
    return (
      <div className="formbudget">
        <h2 id="titrebud">Budget</h2>
              <input className="dob" type="text" name="name" placeholder="Type de dépenses" />
              <input className="dob" type="text" name="name" placeholder="Combien ?" />
              <button className="ajout">Ajouter</button>
      </div>

    );
  }
}

export default Formbudget;
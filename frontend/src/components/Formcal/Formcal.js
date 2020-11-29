import React from 'react';
import './Formcal.css';

class Formcal extends React.Component {

	render() {
    return (
      <div className="formcal">
        <h2 id="titre">Calendrier</h2>
        	<div className="ensemble">
              <input className="doc" type="text" name="name" placeholder="Nom évènement" />
              <label className="label">Jour de début</label>
              <input className="doc" type="date" name="name"/>
              <label className="label">Jour de fin</label>
              <input className="doc" type="date" name="name"/>
              <label className="label">Heure de début</label>
              <input className="doc" type="time" name="name" placeholder="Heure de début"/>
              <label className="label">Heure de fin</label>
              <input className="doc" type="time" name="name" placeholder="Heure de début"/>
              <button className="ajout">Ajouter</button>
            </div>
      </div>

    );
  }
}

export default Formcal;
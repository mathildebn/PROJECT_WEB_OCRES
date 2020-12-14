import React from 'react';
import './Formcal.css';
import axios from 'axios';

class Formcal extends React.Component {

  constructor(props){

    super(props);
    this.state = {
      name : '',
      jour : ''
    }

  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAdd = (event) => {
   event.preventDefault();

   const elements = {
      name : this.state.name,
      start : this.state.start,
      end : this.state.end
    };

   axios({
    url : 'http://localhost:3001/calendar',
    method : 'POST',
    data : elements
   })
    .then(() => {
      console.log("Données envoyées");
      alert(elements.name + " ajouté !")
    })
    .catch(()=>{
      console.log("FAUX");
    })
    console.log(elements);
}

handleDelete = (event) => {
   event.preventDefault();

   const elements = {
      name : this.state.name2
    };

   axios({
    url : `http://localhost:3001/calendar/${elements.name}`,
    method : 'DELETE',
    data : elements
   })
    .then(() => {
      console.log("Données supprimées");
      alert(elements.name +" supprimé !")
    })
    .catch(()=>{
      console.log("FAUX");
    })
    console.log(elements);
}

	render() {
    return (
      <div className="formcal">
        <h2 id="titre">Calendrier</h2>
        	<form onSubmit={this.handleAdd}>
              <input className="doc" type="text" name="name" value={this.state.name} placeholder="Nom évènement" onChange={this.handleChange} required="true"/>
              <label className="label">Jour de début</label>
              <input className="doc" type="date" value={this.state.start} name="start" onChange={this.handleChange} required="true"/>
              <label className="label">Jour de fin</label>
              <input className="doc" type="date" value={this.state.end} name="end" onChange={this.handleChange} />
              <button name="ajout" className="ajout" type="submit">Ajouter</button>
            </form>
            <form onSubmit={this.handleDelete}>
              <label className="labelSupp">Évenement à supprimer (nom exact)</label>
              <input className="doc" type="text" name="name2" value={this.state.name2} placeholder="Nom évènement" onChange={this.handleChange}/>
              <button name="suppr" className="suppr" type="submit" style={{backgroundColor : "#B50607"}}>Supprimer</button>
            </form>
      </div>

    );
  }
}

export default Formcal;
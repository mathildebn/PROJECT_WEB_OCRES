import React from 'react';
import './Formbudget.css';
import axios from 'axios';

class Formbudget extends React.Component {

    constructor(props){
      super(props);
      this.state = {
        name : '',
        value : '',
      }
    }
    
    handleChange = ({target}) => {
      const {name, value} = target;

      this.setState({
        [name] : value
      });
    };

    addsubmit = (event) => {
      event.preventDefault();

      const test = {
        name : this.state.name,
        value : this.state.value
      };

      axios({
        url : 'http://localhost:3001/budget',
        method: 'POST',
        data : test
      })
      .then(() => {
      alert(test.name + " ajouté !")
      })
      .catch(()=> {
        console.log("Erreur");
      });
    };

    delsubmit = (event) => {
      event.preventDefault();

      const test = {
        name : this.state.name2,
      };

      axios({
        url : `http://localhost:3001/budget/${test.name}`,
        method: 'DELETE',
        data : test
      })
      .then(() => {
        console.log("data supp");
      alert(test.name + " supprimé !")
      })
      .catch(()=> {
        console.log("Erreur");
      });
    };

	render() {
    return (
      <div className="formbudget">

        <h2 id="titre">Budget</h2>
          <form onSubmit={this.addsubmit}>
                <input
                    value={this.state.name}
                    className="dob"
                    type="text" name="name"
                    placeholder="Type de dépenses"
                    onChange={this.handleChange}
                />
                <input
                  value={this.state.value}
                  className="dob" type="text"
                  name="value"
                  placeholder="Combien ?"
                  onChange={this.handleChange}
                />
                <button className="ajout" type="submit">Ajouter</button>
          </form>

          <form onSubmit={this.delsubmit}>
            <label className="labelSupp2">Dépense à supprimer</label>
                <input
                    value={this.state.name2}
                    className="dob"
                    type="text" name="name2"
                    placeholder="Nom"
                    onChange={this.handleChange}
                />
                <button className="suppr" type="submit" style={{backgroundColor : "#B50607"}}>Supprimer</button>
          </form>
      </div>

    );
  }
}

export default Formbudget;
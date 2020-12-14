import React from 'react';
import './App.css';
import Header from './components/Header';
import Button from './components/Button';
import Horloge from './components/Horloge';
import Musique from './components/Musique';
import Calendrier from './components/Calendrier/Calendrier';
import Budget from './components/Budget/Budget';
import Budgetmois from './components/Budgetmois/Budgetmois';
import Todolist from './components/Todolist/Todolist';
import News from "./components/News/News";
import Recipes from './components/Recipes/Recipes';
import Weather from './components/Weather/Weather';


class App extends React.Component{
  render(){

  return (
    <div className="container-fluid">
            <Header nom="Dashboard" />

      <main>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="row">
              <Horloge date={new Date()}/>
            </div>
            <div className="row">
              <News />
            </div>
            <div className="row">
            <Budgetmois />
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="row">
              <Calendrier />
            </div>
            <div className="row" id="weather">
              <Weather />
            </div>
            <div className="row">
              <Budget />
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="row">
              <Todolist />
            </div>
            <div className="row">
              <Musique />
            </div>
            <div className="row">
              <Recipes />
            </div>
          </div>
        </div>

          </main>
      </div>
  );
  }
}

export default App;

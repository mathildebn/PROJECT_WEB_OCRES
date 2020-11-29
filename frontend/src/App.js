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
                  <Horloge date={new Date()}/>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <Calendrier />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <Todolist />
                </div>
            </div>
            <div className="row" id="actus">
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <News />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <Weather />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <Musique />
                </div>
            </div>
            <div className="row" id="budget">
                <div className="col-md-5 col-sm-5 col-xs-5">
                  <Budgetmois />
                </div>
                <div className="col-md-3 col-sm-3 col-xs-3">
                  <Budget />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <Recipes />
                </div>
            </div>
          </main>
      </div>
  );
  }
}

export default App;

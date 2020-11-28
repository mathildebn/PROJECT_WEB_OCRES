import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Button from './components/Button';
import Horloge from './components/Horloge';
import Musique from './components/Musique';
import Calendrier from './components/Calendrier/Calendrier'

class App extends React.Component{
  render(){

  return (
    <div className="container-fluid">
            <Header />
      <main>
        <div className="row">
          <div className="col-md-2 col-sm-2 col-xs-2">
            <Horloge date={new Date()} />
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <Musique />
          </div>
          <div className="col-md-6 col-sm-6 col-xs-6">

          </div>
        </div>
        <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-8">
            <Calendrier />
          </div>
        </div>
      </main>
    </div>
  );
  }
}

export default App;

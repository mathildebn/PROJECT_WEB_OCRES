import React from 'react';
import {Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendrier.css';
import axios from 'axios';

moment.locale("fr-FR");
const localizer = momentLocalizer(moment);

class Calendrier extends React.Component {
constructor(props) {
    super(props);
    this.state = {
      cal_events: [
      ],
      title: ''
    }
}

/*  constructor(props){
    super(props);
    this.state = {
      name : '',
      jour : '',
      evenements : []
    }
  } */

  componentDidMount = () => {
    this.getEvents();
  }

  getEvents = () => {
    axios
      .get(`http://localhost:3001/calendar`)
      .then((response)=>{
        const data = response.data;
        this.setState({cal_events : data});
        console.log(data);
        console.log("Infos recues!");
        const {cal_events} = this.state;
        console.log(cal_events);
      })
      .catch(()=>{
        console.log("FAUX");
      })

  }

 /* displayEvent = (evenements) => {

    if (!evenements.length) return null;

    return evenements.map((evenement, index) => (
      <div key={index} className="affichage-event">
        <p>{evenement.name}</p>
        <p>{evenement.start}</p>
        <p>{evenement.end}</p>
      </div>
    ));
  };*/

  render(){

    const {cal_events} = this.state;

    return(
      <div>
        <Calendar  events={cal_events}
            localizer={localizer}/>
      </div>

    )
  }
}

export default Calendrier;
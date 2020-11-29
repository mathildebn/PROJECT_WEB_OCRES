import React from 'react';
import './Horloge.css';

class Heures extends React.Component {
	render(){
		return(

			<div className="haiguille">
				<div className="hour" id ="hour">
				</div>
			</div>
		)
	}
}

class Minutes extends React.Component {
	render(){
		return(

			<div className="maiguille">
				<div className="minute" id ="minute">
				</div>
			</div>
		)
	}
}

class Secondes extends React.Component {
	render(){
		return(

			<div className="saiguille">
				<div className="seconde" id ="seconde">
				</div>
			</div>
		)
	}
}

class Horloge extends React.Component {

	constructor(props){
		super(props);
		//initalisation de l'état
		this.state = {

			date : new Date()
		};
	}

	//setInterval va exécuter la fonction clock toutes les secondes 
	//pour reproduire une vraie horloge
	componentDidMount() {
		this.timer = setInterval(()=>this.clock(),1000);
	}

	componentWillUnmount() {
    	clearInterval(this.timer);
  	}

	clock(){

		const deg = 6;
		const h = document.getElementById('hour');
    	const m = document.getElementById('minute');
    	const s = document.getElementById('seconde');

		let jour = this.state.date;
		let heures = jour.getHours() * 30;
		let minutes = jour.getMinutes() * deg;
		let secondes = jour.getSeconds() * deg;

		this.setState({
			date: new Date()
		});

		h.style.transform = 'rotateZ('+(heures+(minutes/12))+'deg)';
    	m.style.transform = 'rotateZ('+minutes+'deg)';
    	s.style.transform = 'rotateZ('+secondes+'deg)';
  }
  	render() {
    return (
        <Time date={this.state.date} />
    );
  }
}

const Time = (props) => {
	return(
		<div className="horloge">
			<Heures />
			<Minutes />
			<Secondes />
      	</div>
	)
}

export default Horloge;
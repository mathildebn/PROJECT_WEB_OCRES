import React from 'react';
import './Musique.css';
import axios from 'axios';
import Music from './Musique.png';

//URL API
const API_URL = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/tracks"

class Musique extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
      	song1 : null,
      	song2 : null,
      	song3 : null,
      	song4 : null,
      	song5 : null,
      	artist1 : null,
      	artist2 : null,
      	artist3 : null,
      	artist4 : null,
      	artist5 : null,
      	cover1 : null,
      	cover2 : null,
      	cover3 : null,
      	cover4 : null,
      	cover5 : null
      };
   }

  fetchMusic() {
      axios
        .get(`${API_URL}`, {crossdomain: true})
        .then(({data})=>{
        	console.log(data);
        	//Récupérer les 5 premiers titres du toptracks
        	const song1 = data.tracks.data[0].title;
        	const song2 = data.tracks.data[1].title;
			const song3 = data.tracks.data[2].title;
			const song4 = data.tracks.data[3].title;
			const song5 = data.tracks.data[4].title;

			//Récupérer les 5 premiers artistes correspondants du toptracks
			const artist1 = data.tracks.data[0].artist.name;
        	const artist2 = data.tracks.data[1].artist.name;
			const artist3 = data.tracks.data[2].artist.name;
			const artist4 = data.tracks.data[3].artist.name;
			const artist5 = data.tracks.data[4].artist.name;

			//Récupérer les covers des chansons
			const cover1 = data.tracks.data[0].album.cover_small;
			const cover2 = data.tracks.data[1].album.cover_small;
			const cover3 = data.tracks.data[2].album.cover_small;
			const cover4 = data.tracks.data[3].album.cover_small;
			const cover5 = data.tracks.data[4].album.cover_small;

        	this.setState({song1,song2,song3,song4,song5,artist1,artist2,artist3,artist4,artist5,cover1,cover2,cover3,cover4,cover5});
        	
        	console.log(song1, artist1);

        })
        .catch(console.error);
   }

     // Lance un appel au lancement du component
  componentDidMount() {
    const { title } = this.props;
    this.fetchMusic(title);
    console.log(title);
  }

    // A chaque update relance une api
  componentDidUpdate(nextProps) {
    // Ici on verifie que la mise à jour concerne bien le champs city
    if (nextProps.title !== this.props.title) {
      this.fetchMusic(nextProps.title);
    }
  }

   render(){
   	const { song1,song2,song3,song4,song5,artist1,artist2,artist3,artist4,artist5,cover1,cover2,cover3,cover4,cover5 } = this.state;
    const { title } = this.props;
   	return(
   		<div className ="music">
   			<h3><img src={Music} className="icone" alt="iconemusic"/>Musique</h3>
   		<div className="chansons">
   			<div className="song1">
   			  <img src={cover1} alt="cover1"/>
   				{song1}
   				<div className="artist1">
   					{artist1}
   				</div>
   			</div>

   			<div className="song2">
   			<img src={cover2} alt="cover2"/>
   				{song2}
   				<div className="artist2">
   					{artist2}
   				</div>
   			</div>

   			<div className="song3">
   			<img src={cover3} alt="cover3"/>
   				{song3}
   				<div className="artist3">
   					{artist3}
   				</div>
   			</div>

   			<div className="song4">
   			<img src={cover4} alt="cover4"/>
   				{song4}
   				<div className="artist4">
   					{artist4}
   				</div>
   			</div>

   			<div className="song5">
   			<img src={cover5} alt="cover5"/>
   				{song5}
   				<div className="artist5">
   					{artist5}
   				</div>
   			</div>
   		</div>
   		</div>
   	)
   }




}

export default Musique;
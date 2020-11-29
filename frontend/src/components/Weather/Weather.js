import React from 'react';
import './Weather.css';

class Weather extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined
  }

  getWeather = (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const apiCall = fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&APPID=7d063aaefd93a9fe0d5cb35e9368afa5");
  const data = apiCall.json();
  this.setState({
    temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].main
  });
  console.log(data);
}

render(){
  return (
    <div className="app">
      <div className="search-box">
      <div className="search">
          <div className="location-box">
            <div className="location">Paris, Fr</div>
          </div>
          <div className="weather-box">
            <div className="temp">12°C</div>
            <div className="main">Partly cloudy</div>
          </div>
      </div>
      </div>
    </div>
    );

  }
}

export default Weather;
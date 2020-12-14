import React from 'react';
import Form from "./Formweather";
import "./Weather.css";

class Weather extends React.Component {
  state = {
    city: "Paris",
    country: "FR",
    temperature: 4,
    description: "Partly cloudy",
    error: undefined
  }

  getWeather = async(e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&APPID=7d063aaefd93a9fe0d5cb35e9368afa5`);
      const data = await apiCall.json();
      ;
      if (city && country){
        console.log(data);
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          description: data.weather[0].main,
          error: ""
        });
        }
        else {
          this.setState({
            temperature: undefined,
            city: undefined,
            country: undefined,
            description: "",
            error: "Please enter the values"
        });
        }     
  }

render(){
  return (

    <div className={(this.state.description === "Clear") ? "sunny"
    : (this.state.description === "Thunderstorm") ? "stormy"
    : (this.state.description === "Rain" || this.state.description === "Drizzle") ? "rainy"
    : (this.state.description === "Snow") ? "snowy"
    : "cloudy"}>
        <div className="app">
        <main>
            <div className="location-box">
            <div className="location">{this.state.city}, {this.state.country}</div>
            </div>
            <div className="weather-box">
              <div className="temp">{Math.round(this.state.temperature)}°C</div>
              <div className="main">{this.state.description}</div>
              <div>{this.state.error}</div>
            </div>
            <Form getWeather={this.getWeather} />
        </main>
        </div>
    </div>
    
    );

  }
}

export default Weather;
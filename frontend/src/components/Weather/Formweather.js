import React from "react";
import "./Weather.css";


const Form = props => (
	<form className="search-box"onSubmit={props.getWeather}>
		<input className="search-bar" type="text" name="city" placeholder="City..."/>
		<input className="search-bar" type="text" name="country" placeholder="Country..."/>
		<button className="button">Search</button>
	</form>
);

export default Form;
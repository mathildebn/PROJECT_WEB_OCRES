import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Form from './components/Form/Form';
import App from './App';

export default() => (

	<Switch>
		<Route path="/Form"> 
			<Form />
		</Route>
		<Route path="/" >
			<App /> 
		</Route>

		<Route path="*" component={NoMatch}/>
	</Switch>
	)

const NoMatch =()=>
	{
		return(
			<h3>404-Not found</h3>
		);
	};
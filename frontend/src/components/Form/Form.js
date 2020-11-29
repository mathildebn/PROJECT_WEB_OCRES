import React from 'react';
import Horloge from './../Horloge';
import Header from './../Header';
import FormTodo from './../Formtodo/Formtodo';
import Formbudget from './../Formbudget/Formbudget';
import Formcal from './../Formcal/Formcal';

class Form extends React.Component {

	render() {
		return(
		<div className="container-fluid">
            <Header nom="Formulaire" />
            <div id="test" style={{display:'none'}}>
			    <Horloge date={new Date()} />
			</div>
			<main>
     			<div className="row">
          			<div className="col-md-4 col-sm-4 col-xs-4">
            			<FormTodo />
          			</div>
          			<div className="col-md-4 col-sm-4 col-xs-4">
            			<Formbudget />
          			</div>
          			<div className="col-md-4 col-sm-4 col-xs-4">
            			<Formcal />
          			</div>
        		</div>
        		<div className="row">
          			<div className="col-md-4 col-sm-4 col-xs-4">
            			<FormTodo />
          			</div>
          			<div className="col-md-4 col-sm-4 col-xs-4">
            			<Formbudget />
          			</div>
          			<div className="col-md-4 col-sm-4 col-xs-4">
            			<Formcal />
          			</div>
        		</div>
        		<div className="row">
          			<div className="col-md-4 col-sm-4 col-xs-4">
            			<FormTodo />
          			</div>
          			<div className="col-md-4 col-sm-4 col-xs-4">
            			<Formbudget />
          			</div>
          			<div className="col-md-4 col-sm-4 col-xs-4">
            			<Formcal />
          			</div>
        		</div>
        	</main>
    	</div>
			
		)
	}
}

export default Form;
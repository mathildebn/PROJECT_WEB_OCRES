import React from 'react';
import Horloge from './../Horloge';
import Header from './../Header';
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
          			<div className="col-md-6 col-sm-6 col-xs-6">
            			<Formbudget />
          			</div>
          			<div className="col-md-6 col-sm-6 col-xs-6">
            			<Formcal />
          			</div>
        		</div>
        	
      </main>
    </div>
			
		)
	}
}

export default Form;
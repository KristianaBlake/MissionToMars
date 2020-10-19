import React from 'react';
import { Button, Form } from 'semantic-ui-react';

class Apply extends React.Component{
	render(){
		return(
			<div>
				<body id="apply-background">
					<div id="apply-container">
						<header id="apply-header"> Apply </header>

						<h1 id="apply-title"> Sign up for your one-way-trip to Mars! </h1>

						<form id="apply-form">
							<label id="apply-label"> First Name: 
							</label>
						</form>  
						
					</div>
				</body>
			</div> 
		)
	}

}

export default Apply;
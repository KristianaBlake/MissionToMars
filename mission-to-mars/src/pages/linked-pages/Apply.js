import React from 'react';
// import { Button, Form } from 'semantic-ui-react';
// import Table from 'react-bootstrap/Table'

class Apply extends React.Component{
	render(){
		return(
			<div>
				<body id="apply-background">
					<div id="apply-container">
						<header id="apply-header"> Apply </header>

						<h1 id="apply-title"> Sign up for your one-way-trip to Mars! </h1>
						<br/>
						<br/>
						<form id="apply-form">
							<br/>
									<label> First Name: </label>
									<input class="input-label"/>
				
							<br/>
							
									<label> Last Name: </label>
									<input class="input-label"/>
							
							<br/>
								
									<label> Email Address: </label>
									<input class="input-label"/>
						
							<br/>
						</form>  
					</div>
				</body>
			</div> 
		)
	}

}

export default Apply;
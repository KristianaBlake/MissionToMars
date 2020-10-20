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

						<br/>
						<br/>

						<div id="form-container">
							<form id="apply-form">

								<br/>

								<label class="apply-label"> First Name: </label>
								<input class="input-label" placeholder="First Name"/>

								<br/>

								<label class="apply-label"> Last Name: </label>
								<input class="input-label" placeholder="Last Name"/>

								<br/>

								<label class="apply-label"> Email Address: </label>
								<input class="input-label" placeholder="Email Addresss"/>

								<br/>

							</form>  
						</div> 
					</div>
				</body>
			</div> 
		)
	}

}

export default Apply;
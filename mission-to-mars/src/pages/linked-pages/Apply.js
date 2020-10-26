import React from 'react';
import { Button, Form } from 'semantic-ui-react';
import Table from 'react-bootstrap/Table'

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

								<Table>

									<tr>

										<th><label class="apply-label"> First Name: </label></th>
										<th><input class="input-label"/></th>

									</tr>

									<br/>

									<label class="apply-label"> Last Name: </label>
									<input class="input-label"/>

									<br/>

									<label class="apply-label"> Email Address: </label>
									<input class="input-label"/>

								</Table> 

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
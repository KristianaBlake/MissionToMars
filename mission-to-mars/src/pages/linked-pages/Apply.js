import React from 'react';
// import { Button, Form } from 'semantic-ui-react';
// import Table from 'react-bootstrap/Table'

class Apply extends React.Component{
	render(){
		return(
			<div>
				<body id="apply-background">
	    			<div id="apply-container">
	        			<header id="apply-header"> Apply 
	        			</header>
	       					<h1 id="apply-title"> Sign up for your one-way-trip to Mars! 
	       					</h1>
		       				 <form>
		            			<table id="apply-table" border="0" cellpadding="8" cellspacing="0">
		               				<tr>
					                    <td align="right" valign="top"> First Name: </td>
					                    <td> <input type="text" size="20" name="first"/> </td>
					                </tr>
					                <tr>
					                    <td align="right" valign="top"> Last Name: </td>
					                    <td> <input type="text" size="20" name="last"/> </td>
					                </tr>
					                <tr>
					                    <td align="right" valign="top"> Email Address </td>
					                    <td> <input class="apply-input" type="text" size="20" name="last"/> </td>
					                </tr>
					                <tr>
					                    <td align="right"> Gender: </td>
					                    <td> 
					                        <input class="apply-input" type="radio" name="size" value="small"/> Male
					                        <br/> 
					                        <input class="apply-input" type="radio" name="size" value="medium"/> Female
					                        <br/>
					                    </td>
					                </tr>
		            			</table>
		       				 </form>
		       			</div>  
		       		</body>  
			</div> 
		)
	}

}

export default Apply;
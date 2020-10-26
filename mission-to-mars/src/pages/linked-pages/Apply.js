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
	       					<br/>
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
					                         <input class="apply-input" type="radio" name="size" value="medium"/> Do not wish to Self-Identify
					                        <br/>
					                    </td>
					                </tr>
					                 <tr>
				                    <td align="right" valign="top"> Ethnicity: </td>
				                    <td> 
				                        <select name="ethniticty">
				                            
				                            <option value="africanamerican"> 
				                            African American
				                            </option>
				                            
				                            <option value="indian">
				                            Indian
				                            </option>
				                            
				                            <option value="pascificislander">
				                            Pacific Islander
				                            </option>
				                            
				                            <option value="white/caucasian">
				                            White/Causcasian
				                            </option>
				                            
				                            <option value="nativeamerican">
				                            Native American
				                            </option>
				                            
				                            <option value="middleeastern">
				                            Middle Eastern
				                            </option>
				                            
				                            <option value="asianamerican"> 
				                            Asian American
				                            </option>  
				                            
				                            <option value="northafrican"> 
				                            North African
				                            </option>  
				                        </select>
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
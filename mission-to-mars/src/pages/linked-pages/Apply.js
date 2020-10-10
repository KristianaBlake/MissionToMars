import React, {Component} from 'react';

class Apply extends React.Component{
	render(){
		return(
			<div>
				<body id="apply-background">
					<div id="apply-container">
						<header id="apply-header"> Apply </header>

						<h1 id="apply-title"> Sign up for your one-way-trip to Mars! </h1>

						<form>
							<Table id="apply-table" border="0" cellPadding="8" cellSpacing="0">
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
							        <td> 
							        	<input className="apply-input" type="text" size="20" name="last"/> 
							        </td>
							    </tr>
							    <tr>
							        <td align="right"> Gender: </td>
							        <td> 
							            <input className="apply-input" type="radio" name="size" value="small"/> Male

							            <br/> 
							            <input className="apply-input" type="radio" name="size" value="medium"/> Female

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
							    <tr/>
						    
							    <td align="right" valign="top"> Desired Job: </td>
							    <td> 
							        <input className="apply-input" type="checkbox" name="desiredjobs" value="farmers"/>
							        Farmer

							        <br/>
							        <input className="apply-input" type="checkbox" name="desiredjob" value="technician"/>
							        Technician

							        <br/>
							        <input className="apply-input" type="checkbox" name="desiredjob" value="engineer"/>
							        Engineer

							        <br/>
							        <input className="apply-input" type="checkbox" name="desiredjob" value="physican"/>
							        Physician

							        <br/>
							        <input className="apply-input" type="checkbox" name="desiredjob" value="explorer"/>
							        Explorer

							        <br/>
							        <input className="apply-input" type="checkbox" name="desiredjob" value="astrobiologist"/>
							        Astrobiologist

							        <br/>
							        <input className="apply-input" type="checkbox" name="desiredjob" value="spacearchitect"/>
							        Space Architect

							        <br/>
							        <input className="apply-input" type="checkbox" name="desiredjob" value="interiordesigner"/>
							        Interior Designer 

							        <br/>
							        <input className="apply-input" type="checkbox" name="desiredjob" value="botanist"/>
							        Botanist

							        <br/>
							    </td>
						        
							    <tr>
							        <td align="right"> Age: </td>
							        <td>
							            <input className="apply-input" type="radio" name="age" value="18-20"/>
							            18-20

							            <br/> 
							            <input className="apply-input" type="radio" name="age" value="21-25"/>
							            21-25

							            <br/>
							            <input className="apply-input" type="radio" name="age" value="26-30"/>
							            26-30

							            <br/>
							            <input className="apply-input" type="radio" name="age" value="31-35"/>
							            31-35

							            <br/>
							            <input className="apply-input" type="radio" name="size" value="36-40"/>
							            36-40 

							            <br/>
							            <input className="apply-input" type="radio" name="size" value="41-45"/>
							            41-45 

							            <br/>
							            <input className="apply-input" type="radio" name="size" value="46-50"/>
							            46-50 

							            <br/>
							            <input className="apply-input" type="radio" name="size" value="51-55"/>
							            51-55 

							            <br/>
							            <input className="apply-input" type="radio" name="size" value="56-60"/>
							            56-60 

							            <br/>
							            <input className="apply-input" type="radio" name="size" value="61-70"/>
							            61-70 

							            <br/>
							        </td>
							    </tr>

							    <tr>
							        <td align="right" valign="top"> Why Mars? </td>
							        <td> 
								        <textarea className="apply-text" rows="6" colSpan="20"> 
								        </textarea> 
							        </td>
							    </tr>
							    
							    <tr>
							        <td align="right" valign="top"> What would 
							            <br/> you contribute 
							            <br/> to Martian Society? 
							        </td>
							        <td> 
							        	<textarea className="apply-text" rows="6" colSpan="20"> 
							        	</textarea> 
							        </td>
							    </tr>

							    <tr>
							        <td colSpan="2" align="right">
							            <input className="apply-input" type="reset" value="Reset"/>
							            &nbsp; &nbsp; &nbsp; 
							            <input className="apply-input" type="submit" value="Apply!" />
							        </td>
							    </tr>
						</Table>
						</form> 
					</div>
				</body>
			</div> 
		)
	}

}

export default Apply;
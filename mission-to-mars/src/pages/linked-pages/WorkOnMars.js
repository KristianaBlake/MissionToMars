import React, {Component} from 'react';


class WorkOnMars extends React.Component{
	render(){
		return(
			<div>
				<body id="work-background">
					<div id="work-container">     
						<header id="work-header"> Working on Mars </header>

						<div id="work-photo">

							<img className="working-photos" src="assets/images/astronautworkingoutside.jpg" alt="AstronautWorking"/>
							<img className="working-photos" src="assets/images/workingonmars.jpg" alt="MarsExplorers"/>
							<img className="working-photos" src="assets/images/femaleworkingmars.jpg" alt="FemaleAstronaut"/> 
						</div>

						<div id="work-facts"> 

						<h1 id="work-title"> Job Description: Survival </h1>

						    <p className="work-p"> All Martians have an important job on Mars: keeping us alive! </p>
						    
						    <p className="work-p"> The average work day consists of a minimum of four hours of work. </p>

						<br/>
						<br/> 

						<h1 id ="work-title"> List of Job Descriptions on Mars: </h1>
						    <ul style={{listStyleType: 'square'}}> 
						        <li className="work-list"> Farmers </li>
						        <li className="work-list"> Technicians </li>
						        <li className="work-list"> Engineers </li>
						        <li className="work-list"> Physicians </li>
						        <li className="work-list"> Explorers </li>
						        <li className="work-list"> Astrobiologists </li>
						        <li className="work-list"> Space Architects </li>
						        <li className="work-list"> Interior Designers </li>
						        <li className="work-list"> Botanist </li>
							</ul>
						</div>

					</div>

					<br/>
					<br/>

				</body>
			</div>
		)
	}
}

export default WorkOnMars; 
import React, {Component} from 'react';

class LivingOnMars extends React.Component{
	render(){
		return(
			<div>
				<body id="living-background">
					<div id="living-container">
					<header id="living-header"> Living Quarters </header>

					<div id="living-photo">

						<img className="living-photos" src="assets/images/livingquarters.jpg" alt="LivingQuarters"/>
						<img className="living-photos" src="assets/images/livingquarters2.jpg" alt="ComprehensiveLivingQuartersPic"/>
						<img className="living-photos" src="assets/images/livingquarters3.jpg" alt="LivingQuartersRoom"/>

					</div>

					<br/> 
					<br/> 

					<div id="living-facts">

					<h1 className="living-title"> Home Sweet Home </h1>

					    <p className="living-p"> Residence on Mars is based on a sense of community while allowing our citizens privacy. 
					    </p>

					    <p className="living-p"> Communal rooms include the dinning area and gym. </p>
					    
					    <p className="living-p"> Martians are also granted the luxury of having their own personal rooms. This gives our citizens the opportunity to unwind from the day. </p>
					    
					    <br/> 
					    <br/> 
					    
					    <h1> Room Ammenities </h1>
					    
					    
					        <ul style={{listStyleType: 'circle'}}> 
					            <li className="living-list"> Bed </li>
					            <li className="living-list"> Waste Extraction Tunnel</li>
					            <li className="living-list"> Computer for leisure</li>
					        </ul>
					    
					   
					    <p className="living-p"> Computers designated to </p>
					     
					        <ul style={{listStyleType: 'square'}}> 
					            <li className="living-list"> monitor health </li>
					            <li className="living-list"> oxygen count </li>
					            <li className="living-list"> live updates of Earth </li>
					        </ul>
					    
					    <p className="living-p"> The living quarters may be simple, however everyone needs their space in Mars. </p>

					</div>
					</div>
				</body>
	
			</div>
		)
	}
}

export default LivingOnMars; 
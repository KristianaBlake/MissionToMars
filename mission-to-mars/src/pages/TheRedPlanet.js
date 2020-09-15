import React, {Component} from 'react';

class TheRedPlanet extends React.Component{
	render(){
		return(
			<div>
				<body id="red-planet-body"> 
			        <div id="red-planet-container"> 
			            <header id="red-planet-header"> 
			            	<strong> The Red Planet </strong> 
			            </header>
			                
			            <div id="red-planet-photo-container">
			                <img id="red-planet-image" src="images/welcomehomemars.jpg" alt="WelcomeHome"/> 
			            </div>
			          
			            <div id="red-planet-facts">     
			                <h1 id="red-planet-title"> Fun Facts  </h1>
			                
			                <ul style="list-style-type:square">
			                    <l1 class="red-planet-list"> Mars, the 'Red Planet', got its name because of its red soil. This is because Mars has high amounts of iron oxide (rust). </l1>
			                    
			                    <li class="red-planet-list"> Mars was named by the Romans for their God of war because of its red, bloodlike color. </li>
			                    
			                    <li class="red-planet-list"> The Egyptions also gave Mars the name "Her Desher" which means "the red one." </li>
			                    
			                    <li class="red-planet-list"> Mars is smaller, drier and cooler compared to Earth. </li>
			                    
			                    <li class="red-planet-list"> Mars also has four seasons like Earth, but twice as long. </li>
			                    
			                    <li class="red-planet-list"> The most dangerous aspect of Mars is its air. It is mostly composed of poisonous carbon dioxide. </li>
			                    
			                    <li class="red-planet-list"> Mars has two moons, Phobos and Deimos. </li>
			                    
			                    <li class="red-planet-list"> Mars has one the largest volcanos in our solar system, Olympus Mons. </li>
			                    
			                </ul>
			            </div>
			        </div>
			    </body> 
			</div> 
		)
	}
}

export default TheRedPlanet; 
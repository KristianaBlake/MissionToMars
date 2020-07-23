import React from 'react';
import './TheRedPlanet.css';
import './fonts/alienleague.ttf';
import './fonts/nulshock.ttf';


function TheRedPlanet() {
  return (
    <div className="container"> 
    
        <header> <strong> The Red Planet </strong> </header>
        
        <div className="photo">
            <img src="welcomehomemars.jpg" alt="WelcomeHome" /> 
        </div> 
    
      
        <div className="facts">     
            <h1> Fun Facts  </h1>
            <ul style={{ listStyleType: 'square' }}>
                <l1> Mars, the 'Red Planet', got its name because of its red soil. This is because Mars has high amounts of iron oxide (rust). </l1>
                
                <li> Mars was named by the Romans for their God of war because of its red, bloodlike color. </li>
                
                <li> The Egyptions also gave Mars the name "Her Desher" which means "the red one." </li>
                
                <li> Mars is smaller, drier and cooler compared to Earth. </li>
                
                <li> Mars also has four seasons like Earth, but twice as long. </li>
                
                <li> The most dangerous aspect of Mars is its air. It is mostly composed of poisonous carbon dioxide. </li>
                
                <li> Mars has two moons, Phobos and Deimos. </li>
                
                <li> Mars has one the largest volcanos in our solar system, Olympus Mons. </li>
            </ul>
        </div> 
    </div> 
  );
}

export default TheRedPlanet;
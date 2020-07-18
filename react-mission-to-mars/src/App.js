import React from 'react';
import './App.css';
import './fonts/alienleague.ttf';

function App() {
  return (
    <div className="App">
    	<div className="container">
            <header> <strong> Mission to Mars </strong> </header>
            
            <nav> 
                
                <a href="TheRedPlanet.html"> The Red Planet </a>
            
                <a href="LifeOnMars.html"> Life on Mars </a>
            
                <a href="apply.html"> Apply </a> 
                
                <a href="sources.html"> Sources </a>
            
            </nav>
            
            <div id="photo">
            
                <img src="WeNeedYou.jpg" alt="WeNeedYou" /> 
            
            </div>
            
            <article>
                
                <br/>
                <br/> 
                <br/>  
                
                <h1> Greetings Earthlings </h1>

                <p> We, your fellow Martians are inviting you on a trip of a lifetime. Well...a one way trip that is. </p>
 
                <p> Here on Mars, our small population is thriving and we need hard working, creative individuals like yourself to help our Martian civilization grow. </p>
                
                <p> Click on the links above to learn about this once in a lifetime opportunity. We hope to see you soon. </p>
            
            </article>
        </div>
    
    </div>
  );
}

export default App;

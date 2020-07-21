import React from 'react';
import './App.css';
import './fonts/alienleague.ttf';
import './fonts/nulshock.ttf';
import WeNeedYou from './img/WeNeedYou.jpg';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    	<div className="container">
            <header className="header"> <strong> Mission to Mars </strong> </header>
            
            <nav className="nav"> 
                
                <a className="nav-links" href="TheRedPlanet.html"> The Red Planet </a>
            
                <a className="nav-links" href="LifeOnMars.html"> Life on Mars </a>
            
                <a className="nav-links" href="apply.html"> Apply </a> 
                
                <a className="nav-links" href="sources.html"> Sources </a>
            
            </nav>
            
            <div className="photo">
            
                <img src={WeNeedYou} alt="WeNeedYou" /> 
            
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

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import './App.css';
import Home from './pages/Home';
import TheRedPlanet from './pages/linked-pages/TheRedPlanet.js';


function App() {
  return (
  	<Router>
  		<Switch>
  			<Route exact path="/" component={Home} />
  			<Route path="/theredplanet" component={TheRedPlanet} /> 
  		</Switch> 
  	</Router> 
  );
}

export default App;

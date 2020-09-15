import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 

import './App.css';
import Home from './pages/Home';
import TheRedPlanet from './pages/linked-pages/TheRedPlanet.js';
import LifeOnMars from "./pages/linked-pages/LifeOnMars.js";

import WorkOnMars from "./pages/linked-pages/supp-pages/WorkOnMars.js";


function App() {
  return (
  	<Router>
  		<Switch>
  			<Route exact path="/" component={Home} />
  			<Route path="/theredplanet" component={TheRedPlanet} /> 
  			<Route path="/lifeonmars" component={LifeOnMars} /> 
  			<Route path="/workonmars" component={WorkOnMars} /> 
  		</Switch> 
  	</Router> 
  );
}

export default App;

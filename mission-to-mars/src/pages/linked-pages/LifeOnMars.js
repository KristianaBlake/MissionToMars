import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import WorkOnMars from './supp-pages/WorkOnMars.js'

class LifeOnMars extends React.Component{
	render(){
		return(
			<div>
				<body id="life-body">

					<div id="life-container"> 

					<header id="life-header"> 
					<strong> Life on Mars </strong> 
					</header>

					<nav className="navigation">

					    <Link className="nav-links" to="/workonmars"> Work 
					    </Link>
					    
					    <a className="nav-links" href="foodonmars.html"> Food </a>
					    
					    <a className="nav-links" href="livingonmars.html"> Living Quarters </a>
					    
					</nav>

					<img className="life-mars-image" src="assets/images/lifeonmars.jpg" alt="Crew"/> 

					<img className="life-mars-image" src="assets/images/food.jpg" alt="Food"/>

					<img className="life-mars-image" src="assets/images/livingquarters2.jpg" alt="LivingQuarters"/> 

					<br/> 
					    
					<p className="life-mars-p"> Life on Mars may be more than any life you have lead on Earth. Each Martian living on our humble planet has a purpose; contributing to the survival of our species. As a result, all Martians lead a structured twelve hour day. </p> 

					<p className="life-mars-p"> Our population may be small, but we are diverse. Martians have become a strong community that only hopes to thrive. Luckily, we have been successful and would like your help! Click on the above links to understand the basic of our lifestyle here on the Red Planet. 
					</p>
					  
					<br/>

					</div>

				</body>
			</div>
		)
	}
}

export default LifeOnMars; 
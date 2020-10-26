import React from 'react';
import { Link } from 'react-router-dom';

import TheRedPlanet from './linked-pages/TheRedPlanet.js';
import LifeOnMars from './linked-pages/LifeOnMars.js';
import Apply from './linked-pages/Apply.js';

class Home extends React.Component{
	render(){
		return(
			<div>
				<body id ="index-body">
					<div id="index-background">
						<div id="index-container">
							
							<br/>
							<br/>

				            <header id ="index-header"> <strong> Mission to Mars </strong> 
				            </header>

				            <br/>
				            <br/> 

				            <nav className="navigation"> 
			                	<Link className="nav-links" to="/theredplanet">
			                 		The Red Planet 
			                 	</Link> 
				             
				             	<Link className="nav-links" to="/lifeonmars">
			                 		Life on Mars  
			                 	</Link> 
				                
				            
				                <Link className="nav-links" to="/apply"> Apply </Link> 
				                
				                <a className="nav-links" href="sources.html"> Sources </a>
				            
				            </nav>
				            
				            <div id="photo">
				            
				                <img id="index-image" src="assets/images/WeNeedYou.jpg" alt="WeNeedYou"/> 
				            
				            </div>
				            
				            <article id="index-article">
				                
				                <br/>
				                <br/> 
				                <br/>  
				                
				                <h1 id="index-title"> Greetings Earthlings </h1>

				                <p className="index-p"> We, your fellow Martians are inviting you on a trip of a lifetime. Well...a one way trip that is. </p>
				 
				                <p className="index-p"> Here on Mars, our small population is thriving and we need hard working, creative individuals like yourself to help our Martian civilization grow. </p>
				                
				                <p className="index-p"> Click on the links above to learn about this once in a lifetime opportunity. We hope to see you soon. </p>
				            
				            </article>
				    	</div>
					</div>
				</body>
			</div>
		)
	}
}

export default Home;
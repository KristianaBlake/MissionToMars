import React, {Component} from 'react';

class Home extends React.Component{
	render(){
		return(
			<div>
				<body id ="indexBody">
					<div id="indexBackground">
						<div id="indexContainer">
				            <header id ="indexHeader"> <strong> Mission to Mars </strong> </header>
				            
				            <nav className="navigation"> 
				                
				                <a className="nav-links" href="theredplanet.html"> The Red Planet </a>
				            
				                <a className="nav-links" href="lifeonmars.html"> Life on Mars </a>
				            
				                <a className="nav-links" href="apply.html"> Apply </a> 
				                
				                <a className="nav-links" href="sources.html"> Sources </a>
				            
				            </nav>
				            
				            <div id="photo">
				            
				                <img id="indexImage" src="assets/images/WeNeedYou.jpg" alt="WeNeedYou"/> 
				            
				            </div>
				            
				            <article id="indexArticle">
				                
				                <br/>
				                <br/> 
				                <br/>  
				                
				                <h1 id="indexTitle"> Greetings Earthlings </h1>

				                <p className="indexP"> We, your fellow Martians are inviting you on a trip of a lifetime. Well...a one way trip that is. </p>
				 
				                <p className="indexP"> Here on Mars, our small population is thriving and we need hard working, creative individuals like yourself to help our Martian civilization grow. </p>
				                
				                <p className="indexP"> Click on the links above to learn about this once in a lifetime opportunity. We hope to see you soon. </p>
				            
				            </article>
				    	</div>
					</div>
				</body>
			</div>
		)
	}
}

export default Home;
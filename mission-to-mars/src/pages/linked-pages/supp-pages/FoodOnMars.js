import React, {Component} from 'react';

class FoodOnMars extends React.Component{
	render(){
		return(
			<div>
				<body id="food-background"> 
					<div id="food-container"> 

						<header id="food-header"> Food on Mars </header>

						<br/>
						<br/>
						<br/>

						<div id="food-photo">
							<img className="food-photos" src="assets/images/communaleating.jpg" alt="CrewEatingTogether"/>
							<img className="food-photos" src="assets/images/foodgrowing.jpg" alt="FoodGrowing"/>
							<img className="food-photos" src="assets/images/food.jpg" alt="PackagedFood"/> 
						</div>

					<div id="food-facts">
						<h1 className="food-titles"> Let's Eat! </h1>
							<p className="food-p"> All Martians eat three meals a day: breakfast, lunch and dinner. Part of our food is still sent from Earth, as the other half is grown here on Mars. Breakfast and dinner are eaten with the entire crew. One hour is dedicated to breakfast, while an hour and a half is dedicated to dinner. </p> 

							<p className="food-p"> Commensality is an important aspect of our daily life because it gives us Martians the time to remember that we are not alone.  </p>

						<br/>
						<br/>

						<h1 className="food-titles"> Yumm</h1>
							<p className="food-p"> Food available on Mars: </p>

						    <ul style={{listStyleType: 'circle'}}> 
						        <li className="food-list"> Lettuce </li>
						        <li className="food-list"> Potatoes </li>
						        <li className="food-list"> Cabbage </li>
						        <li className="food-list"> Carrots </li>
						        <li className="food-list"> Green Beans </li>
						        <li className="food-list"> Onions </li>
						    </ul>
					</div>
				</div>

				<br/>
				<br/> 

				</body>
			</div> 
		)
	}
}

export default FoodOnMars; 
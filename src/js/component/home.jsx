import React, { useState } from "react";
//include images into your bundle
import Card from "./Card";
const icon = <i class="fa-regular fa-clock"></i>


//create your first component
const Home = ({counter}) => {
	const [seconds, setSeconds]= useState([])
	const string = counter.toString();
	const valores = string.split("") 
	setSeconds(valores);
	return (
		<div className="div1 bg-white bg-opacity-10">
			<div className="container bg-black rounded mt-5 " style={{width:'1000px', height:'200px'}}>
			<div className="row d-flex justify-content-center align-items-center" style={{width:'1000px', height:'200px'}}>
			<Card className="card1 col-4" title={icon}/>
			<Card className="card2 col-4" title="0"/>
			<Card className="card3 col-4" title="0"/>
			<Card className="card4 col-4" title="0"/>
			<Card className="card5 col-4" title="0"/>
			<Card className="card6 col-4" title="0"/>
			<Card className="card7 col-4" title="0"/>
		</div>
		</div>
		</div>
	);
};

export default Home;

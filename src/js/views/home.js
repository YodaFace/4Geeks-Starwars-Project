import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
// import "../../styles/background.scss";
import { Card } from ".././component/card.js";

export const Home = () => (
	<div className="container">
		<div className="mtl-2">
			<div className="scrollmenu">
				<a href="#home">Home</a>
				<a href="#news">News</a>
				<a href="#contact">Contact</a>
				<a href="#about">About</a>
				<a href="#support">Support</a>
				<a href="#blog">Blog</a>
				<a href="#tools">Tools</a>
				<a href="#base">Base</a>
				<a href="#custom">Custom</a>
				<a href="#more">More</a>
				<a href="#logo">Logo</a>
				<a href="#friends">Friends</a>
				<a href="#partners">Partners</a>
				<a href="#people">People</a>
				<a href="#work">Work</a>
			</div>

			<h3>Characters</h3>
			<div className="cardrow d-flex flex-row m-2">
				<Card />
				<Card />
				<Card />
				<Card />

				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button, bootstrap is working
			</a>
		</div>
	</div>
);

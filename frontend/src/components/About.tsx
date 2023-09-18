import React from "react";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<div className="home-container">
			<h1>About Page!!</h1>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
			</div>
		</div>
	);
};

export default About;

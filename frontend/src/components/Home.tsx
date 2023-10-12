import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="home-container">
			<h1>Welcome to Our React App!</h1>
			<p>This is the homepage of our application. Feel free to explore!</p>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<Link to="/">Home</Link>
				<Link to="/use-render-info">UseRenderInfo</Link>
			</div>
		</div>
	);
};

export default Home;

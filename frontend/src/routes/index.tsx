// Routing.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={`/`} element={<Home />} />
				<Route path={`/about`} element={<About />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;

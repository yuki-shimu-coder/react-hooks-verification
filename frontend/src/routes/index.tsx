import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import UseRenderInfoParent from "../components/UseRenderInfoParent";

const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={`/`} element={<Home />} />
				<Route path={`/use-render-info`} element={<UseRenderInfoParent />} />
			</Routes>
		</BrowserRouter>
	);
};

export default Routing;

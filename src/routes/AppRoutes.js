import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login.js";
import Home from "../pages/Home.js";
import CreateBuild from "../pages/CreateBuild.js";
import CreateRelease from "../pages/CreateRelease.js";

const AppRoutes = () => (
	<Router>
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/Home' element={<Home />} />
			<Route path='/create-build' element={<CreateBuild />} />
			<Route path='/create-release' element={<CreateRelease />} />
		</Routes>
	</Router>
);

export default AppRoutes;

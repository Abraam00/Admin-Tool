import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Logon.jsx";
import Home from "../components/RequestsCollection.jsx";
import CreateBuild from "../components/CreateBuild.jsx";
import CreateRelease from "../components/CreateRelease.jsx";
import CreateReleaseGroup from "../components/CreateReleaseGroup.jsx";
import CreateParticipant from "../components/CreateParticipant.jsx";
import CreateApp from "../components/CreateApplication.jsx";
import EditApp from "../components/EditApp.jsx";
import Delete from "../components/Delete.jsx";

const AppRoutes = () => (
	<Router>
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/Home' element={<Home />} />
			<Route path='/create-build' element={<CreateBuild />} />
			<Route path='/create-release' element={<CreateRelease />} />
			<Route path='/create-release-group' element={<CreateReleaseGroup />} />
			<Route path='/create-participant' element={<CreateParticipant />} />
			<Route path='/create-application' element={<CreateApp />} />
			<Route path='/edit-application' element={<EditApp />} />
			<Route path='/delete-build' element={<Delete fieldName={"Build Id"} />} />
			<Route
				path='/delete-release'
				element={<Delete fieldName={"Release Id"} />}
			/>
			<Route
				path='/delete-release-group'
				element={<Delete fieldName={"Release Group Id"} />}
			/>
			<Route
				path='/delete-participant'
				element={<Delete fieldName={"Participant Id"} />}
			/>
			<Route
				path='/delete-application'
				element={<Delete fieldName={"App Id"} />}
			/>
		</Routes>
	</Router>
);

export default AppRoutes;

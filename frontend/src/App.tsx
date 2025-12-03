import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Calender from "./pages/calender/Calender";

const App: React.FC = () => {
	return (
		<div className=''>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/dashboard' element={<Dashboard />} />
				<Route path='/calender' element={<Calender />} />
			</Routes>
		</div>
	);
}

export default App;

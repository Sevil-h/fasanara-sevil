import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout/Layout";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import data from "./store/data";

function App() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => navigate("/home"), 7000);
	}, []);
	return (
		<Layout navData={data.nav} logo={data.logo}>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home data={data} />} />
			</Routes>
		</Layout>
	);
}

export default App;

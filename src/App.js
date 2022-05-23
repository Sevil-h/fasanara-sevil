import React, { useEffect, Suspense } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout/Layout";
// import Home from "./pages/Home";
import Landing from "./pages/Landing";
import data from "./store/data";
import Loader from "./components/Loader/Loader";

const Home = React.lazy(() => import("./pages/Home.js"));

function App() {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => navigate("/home"), 7000);
	}, []);
	return (
		<Layout navData={data.nav} logo={data.logo}>
			<Suspense
				fallback={
					<div className="d-flex justify-content-center align-items-center">
						<Loader />
					</div>
				}
			>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/home" element={<Home data={data} />} />
				</Routes>
			</Suspense>
		</Layout>
	);
}

export default App;

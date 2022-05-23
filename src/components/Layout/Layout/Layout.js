import React, { Fragment } from "react";
import { NavLink, useLocation } from "react-router-dom";
import className from "./Layout.module.css";
import Navigation from "../Nav/Navigation";
import Footer from "../Footer/Footer";

const Layout = (props) => {
	const location = useLocation();
	const path = location.pathname;
	return (
		<Fragment>
			{path !== "/" && <Navigation data={props.navData} logo={props.logo} />}
			{props.children}
			{path !== "/" && <Footer />}
		</Fragment>
	);
};

export default Layout;

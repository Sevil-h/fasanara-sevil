import React from "react";
import classes from "../styles/Landing.module.css";

const Landing = () => {
	return (
		<div className={classes.landing}>
			<img
				src="assets/logo/logo-big.webp"
				alt="logo"
				className={classes.logo}
			/>
			<p className={classes.text}>
				"Learn how to see. Realise that everything connects to everything else."
			</p>
			<p className={classes.author}>- Leonardo da Vinci</p>
		</div>
	);
};

export default Landing;

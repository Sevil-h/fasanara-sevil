import React from "react";
import classes from "./Box.module.css";

const Box = (props) => {
	return (
		<div className={classes.box}>
			<img className={classes.image} src="assets/logo/logo.webp" />
			<div>
				<p className={classes.title}>{props.title}</p>
				<p className={classes.text}>{props.text}</p>
			</div>
		</div>
	);
};

export default Box;

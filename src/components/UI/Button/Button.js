import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
	const style = {
		backgroundColor: props.background,
		padding: props.padding,
	};
	return (
		<button className={classes.button} style={style}>
			{props.text}
		</button>
	);
};

export default Button;

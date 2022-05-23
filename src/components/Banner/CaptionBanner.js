import React from "react";
import classes from "./Caption.module.css";

const CaptionBanner = (props) => {
	return (
		<section
			className={classes.banner}
			style={{ backgroundImage: props.background }}
		>
			<h1>{props.title}</h1>
		</section>
	);
};

export default CaptionBanner;

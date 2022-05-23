import React from "react";
import classes from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={classes.spinnerBox}>
			<div className={classes.circleBorder}>
				<div className={classes.circleCore}></div>
			</div>
		</div>
	);
};

export default Loader;

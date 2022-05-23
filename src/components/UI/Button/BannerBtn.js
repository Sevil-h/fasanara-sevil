import React from "react";
import classes from "./BannerBtn.module.css";

const BannerBtn = (props) => {
	return <button className={classes.button}>{props.text}</button>;
};

export default BannerBtn;

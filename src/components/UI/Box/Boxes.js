import React from "react";
import Box from "./Box";
import classes from "./Boxes.module.css";

const Boxes = (props) => {
	return (
		<div className={classes.cards}>
			{props.data.map((item) => (
				<Box key={item.id} title={item.title} text={item.text} />
			))}
		</div>
	);
};

export default Boxes;

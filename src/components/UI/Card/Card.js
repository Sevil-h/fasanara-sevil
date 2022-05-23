import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
	return (
		<div
			className={classes.card}
			style={{
				backgroundColor: props.backgroundColor,
				color: props.color,
				width: props.width,
			}}
		>
			<img
				src={props.image}
				className={classes.image}
				style={{ height: props.height, width: props.width }}
			/>
			<div className={classes.info}>
				<span className={classes.title} style={{ color: props.color }}>
					{props.title}
				</span>
				<p className={classes.text}>{props.text}</p>
			</div>
		</div>
	);
};

export default Card;

import React, { useState } from "react";
import classes from "./EventCard.module.css";

const EventCard = (props) => {
	const [isHover, setIsHover] = useState(false);
	const styles = isHover && {
		hover: {
			backgroundImage: `url(${props.background})`,
			color: "white",
			backgroundSize: "contain",
			backgroundPosition: "center",
		},
	};
	return (
		<div
			className={classes.card}
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			style={styles.hover}
		>
			<p className={classes.title}>{props.title}</p>
			<p className={classes.text}>{props.text}</p>
			<span className={classes.date}>{props.date}</span>
		</div>
	);
};

export default EventCard;

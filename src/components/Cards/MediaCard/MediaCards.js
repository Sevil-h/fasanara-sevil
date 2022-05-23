import React from "react";
import classes from "./MediaCards.module.css";
import MediaCard from "./MediaCard";

const MediaCards = (props) => {
	return (
		<div className={classes.cards}>
			{props.data.map((item) => (
				<MediaCard
					key={item.id}
					image={item.media}
					logo={item.logo}
					text={item.text}
					title={item.title}
					date={item.date}
					video={item.video}
				/>
			))}
		</div>
	);
};

export default MediaCards;

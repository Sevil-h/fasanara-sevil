import React from "react";
import EventCard from "./EventCard";
import classes from "./EventCards.module.css";

const EventCards = (props) => {
	return (
		<>
			<h3 className={classes.title}>{"recent & upcoming events"}</h3>
			<div className={classes.eventCards}>
				{props.data.map((item) => (
					<EventCard
						key={item.id}
						background={item.background}
						title={item.title}
						text={item.text}
						date={item.date}
					/>
				))}
			</div>
			<p className={classes.line}></p>
		</>
	);
};

export default EventCards;

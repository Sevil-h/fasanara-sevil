import React from "react";
import Card from "./Card";
import classes from "./Cards.module.css";

const Cards = (props) => {
	return (
		<div className={classes.cards}>
			{props.data.map((item) => (
				<Card
					width={props.width}
					color={props.color}
					backgroundColor={props.backgroundColor}
					key={item.id}
					image={item.image}
					title={item.title}
					text={item.text}
					date={item.date}
					height={props.height}
				/>
			))}
		</div>
	);
};

export default Cards;

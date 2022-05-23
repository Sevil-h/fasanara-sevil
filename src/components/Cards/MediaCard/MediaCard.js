import React, { useState } from "react";
import ReactPlayer from "react-player";
import classes from "./MediaCard.module.css";
import { BsPlayCircle } from "react-icons/bs";

const MediaCard = (props) => {
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<div className={classes.card}>
			{props.video.length ? (
				<div className={classes.wrapper}>
					{!isPlaying ? (
						<div className={classes.playerCover}>
							<img className={classes.playerImg} src={props.image} />
							<BsPlayCircle
								className={classes.btnIcon}
								onClick={() => setIsPlaying(true)}
							/>
						</div>
					) : (
						<ReactPlayer
							url={props.video}
							width="100%"
							height="100%"
							playing={true}
							className={classes.player}
							controls
						></ReactPlayer>
					)}
				</div>
			) : (
				<div>
					<img className={classes.image} src={props.image} />
				</div>
			)}
			<div className={classes.info}>
				<h1 className={classes.title}>{props.title}</h1>
				<p className={classes.date}>{props.date}</p>
				<p className={classes.text}>{props.text}</p>
				<img className={classes.logo} src={props.logo} />
			</div>
		</div>
	);
};

export default MediaCard;

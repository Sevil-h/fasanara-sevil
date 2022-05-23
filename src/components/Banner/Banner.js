import React, { useState } from "react";
import classes from "./Banner.module.css";
import Carousel from "react-bootstrap/Carousel";
import BannerBtn from "../UI/Button/BannerBtn";

const Banner = (props) => {
	console.log(props.data);

	const filterStyle = {
		filter: "grayscale(0.7)",
	};
	return (
		<section className={classes.banner}>
			<Carousel
				fade
				className={classes.slider}
				prevIcon=""
				nextIcon=""
				slide={true}
				indicators={true}
			>
				{props.data.map((banner) => (
					<Carousel.Item key={banner.id} className={classes.sliderItem}>
						{banner.type === "image" ? (
							<img
								className={classes.sliderImage}
								src={banner.background}
								alt="First slide"
							/>
						) : (
							<video
								autoPlay
								loop
								muted
								style={filterStyle}
								className={classes.sliderVideo}
							>
								<source
									src={banner.background}
									type="video/mp4"
									className={classes.sliderImage}
								/>
								Your Browser does not support the video tag.
							</video>
						)}
						<Carousel.Caption className={classes.caption}>
							<h3>{banner.title}</h3>
							<h3>{banner.title2}</h3>
							<h4>{banner.subtitle}</h4>
							<p>{banner.text}</p>
							<BannerBtn text={banner.button} />
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</section>
	);
};

export default Banner;

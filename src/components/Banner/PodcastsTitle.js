import React from "react";

const PodcastsTitle = () => {
	const styles = {
		display: "flex",
		justifyContent: "flex-start",
		alignItems: "center",
		padding: "4rem 0",
	};
	return (
		<div style={styles}>
			<svg
				width="60"
				height="60"
				viewBox="0 0 60 60"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle r="30" transform="matrix(-1 0 0 1 30 30)" fill="#1F1E1E" />
				<path
					d="M51.7808 30.8334H45.6164L42.7397 22.9167L40.6849 38.3334L35.3425 17.5L36.1644 45L28.3562 10.8334"
					stroke="white"
					strokeWidth="2"
				/>
				<path
					d="M32.0548 47.9167L25.0685 15.8334V37.9167L19.3151 22.5L18.0822 31.25H10.274"
					stroke="white"
					strokeWidth="2"
				/>
			</svg>
			<span
				className="title"
				style={{ fontWeight: "500", marginLeft: "8px", fontFamily: "Inter" }}
			>
				Podcasts
			</span>
		</div>
	);
};

export default PodcastsTitle;

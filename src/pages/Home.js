import React from "react";
import Banner from "../components/Banner/Banner";
import CaptionBanner from "../components/Banner/CaptionBanner";
import EventCards from "../components/Cards/EventCard/EventCards";
import Boxes from "../components/UI/Box/Boxes";
import Button from "../components/UI/Button/Button";
import Cards from "../components/UI/Card/Cards";
import PodcastsTitle from "../components/Banner/PodcastsTitle";
import MediaCards from "../components/Cards/MediaCard/MediaCards";

const Home = (props) => {
	console.log(props.data);
	return (
		<>
			<Banner data={props.data.banner} />
			<div className="container">
				<EventCards data={props.data.events} />
				<section>
					<h1 className="title">Fasanara Capital</h1>
					<h3 className="subtitle">Quant Fintech Investment Company</h3>
					<p className="text">
						Fasanara Capital is an independent, owner-managed alternative assest
						management company authorized and regulated by the Financial Conduct
						Authority. Co-founded by Francesco Filia in 2011, Fasanara is based
						in London with alliance offices in Milan. We offer access to a range
						of inventive multi-asset capacity-constrained niche products.
						Fasanara's unorthodox portfolio construction and unconventional
						investment strategy is a response to today’s transformational
						markets.
					</p>
					<Boxes data={props.data.fasanaraCards} />
					<Button text="Our funds" />
				</section>
			</div>
			<CaptionBanner title="insights" background="url('assets/image.webp')" />
			<div className="container">
				<h1 className="title">Insights from the team</h1>
				<p className="text">
					Our Outlooks, Cookies and Scenarious on the market
				</p>
				<Cards data={props.data.insightsCards} />
				<Button text="more insights" />
				<PodcastsTitle />
				<Cards
					data={props.data.podcasts}
					backgroundColor="black"
					color="white"
					height="180px"
				/>
				<Button text="more podcasts" />
			</div>
			<CaptionBanner title="media" background="url('assets/line.webp')" />
			<div className="container" style={{ marginBottom: "4rem" }}>
				<MediaCards data={props.data.medias} />
				<Button text="more media" />
			</div>
		</>
	);
};

export default Home;

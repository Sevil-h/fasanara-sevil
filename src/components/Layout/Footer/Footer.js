import React from "react";
import classes from "./Footer.module.css";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
	return (
		<section className={classes.footer}>
			<div className={classes.container}>
				<div className={classes.top}>
					<ul>
						<li>All rights reserved©</li>
						<li>Fasanara Capital Ltd</li>
						<li>2022</li>
					</ul>
					<ul>
						<li>40 New Bond Street, London W1S 2RX</li>
						<li>Tel: 0203-430-2482</li>
						<li>Email: investors@fasanara.com</li>
					</ul>
					<ul>
						<li>Disclaimer</li>
						<li>Privacy policy</li>
						<li>Browsing and Cookies</li>
						<li>ESG</li>
						<li>Pillar 3 Disclosure</li>
					</ul>
					<div>
						<FaLinkedinIn className={classes.logo} />
						<FaTwitter className={classes.logo} />
					</div>
				</div>
				<div className={classes.bottom}>
					<div className={classes.newsletter}>
						<label>Join Our Newsletter</label>
						<div>
							<input placeholder="Name" />
							<input placeholder="Last Name" />
							<input placeholder="Email" />
							<button className={classes.button}>Subscribe</button>
						</div>
					</div>
					<img
						src="assets/logo/logo-big.webp"
						className={classes.companyLogo}
					/>
				</div>
			</div>
		</section>
	);
};

export default Footer;

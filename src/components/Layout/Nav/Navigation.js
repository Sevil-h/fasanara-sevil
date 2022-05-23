import React from "react";
import classes from "./Navigation.module.css";
import NavItem from "./NavItem";
const Navigation = (props) => {
	return (
		<nav className={classes.nav}>
			<img src={props.logo} alt="logo" className={classes.logo} />
			<ul className={classes.list}>
				{props.data.map((item) => (
					<NavItem
						key={item.id}
						id={item.id}
						title={item.title}
						items={item.navItems}
					/>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;

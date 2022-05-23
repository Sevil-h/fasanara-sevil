import React, { useState } from "react";
import { NavLink, useLinkClickHandler } from "react-router-dom";
import classes from "./NavItem.module.css";

const NavItem = (props) => {
	const [isShow, setIsShow] = useState(false);

	const closeDropdown = () => {
		setTimeout(() => {
			setIsShow(false);
		}, 1000);
	};

	return (
		<li className={classes.navItem}>
			<NavLink
				key={props.title}
				onMouseEnter={() => setIsShow(true)}
				onMouseLeave={closeDropdown}
				to="#"
			>
				{props.title}
				{isShow && props.items.length > 0 && (
					<div
						className={classes.dropdown}
						onMouseLeave={() => setIsShow(false)}
					>
						{props.items.map((item) => (
							<p key={item} className={classes.dropdownItem}>
								{item}
							</p>
						))}
					</div>
				)}
			</NavLink>
		</li>
	);
};

export default NavItem;

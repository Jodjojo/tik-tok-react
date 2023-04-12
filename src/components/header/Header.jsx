import React from "react";
import tiktoklogo from "../../images/tiktoklogo.png";
import dots from "../../images/menu-dots.svg";
import search from "../../images/search.svg";
import { Link } from "react-router-dom";
import classes from "./header.module.css";

function Header() {
	return (
		<div className={classes.nav_bar}>
			<Link to="/">
				<img src={tiktoklogo} className={classes.app_logos} alt="logo" />
			</Link>

			<form className={classes.form__banner}>
				<input
					className={classes.search__input}
					type="text"
					placeholder="Search accounts and videos"
					name="search"
				/>
				<button className={classes.search__submit} type="submit">
					<img src={search} alt="logo" />
				</button>
			</form>
			<ul className={classes.nav_links}>
				<li>Upload</li>

				<Link to="/profile" style={{ textDecoration: "none" }}>
					<li className={classes.btn}>Log in</li>
				</Link>
				<li>
					<img src={dots} alt="logo" />
				</li>
			</ul>
		</div>
	);
}

export default Header;

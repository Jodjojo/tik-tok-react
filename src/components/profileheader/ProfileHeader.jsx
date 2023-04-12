import React from "react";
import tiktoklogo from "../../images/tiktoklogo.png";
import search from "../../images/search.svg";
import { Link } from "react-router-dom";
import profile from "../../images/profile.png";
import letter from "../../images/letter.svg";
import message from "../../images/message.svg";
import classes from "./profileheader.module.css";

function ProfileHeader() {
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
				<Link to="/upload">
					<li className={classes.upload}> </li>
				</Link>

				<li>
					{" "}
					<img src={message} alt="logo" />
				</li>
				<li>
					<img src={letter} alt="logo" />
				</li>
				<li>
					<img className={classes.profile} src={profile} alt="logo" />
				</li>
			</ul>
		</div>
	);
}

export default ProfileHeader;

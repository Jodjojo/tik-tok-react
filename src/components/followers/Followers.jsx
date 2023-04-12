import React from "react";
import videot from "../../images/videot.svg";
import MicroCard from "../microcard/MicroCard";
import classes from "./followers.module.css";

function Followers() {
	return (
		<div className={classes.followers_banner}>
			<div className={classes.followers_section}>
				<div className={classes.home} />
				<h4 className={classes.bold_content}>For You</h4>
			</div>
			<div className={classes.followers_section}>
				<div className={classes.following} />
				<h4>Following</h4>
			</div>
			<div className={classes.followers_section}>
				<div className={classes.live}>
					<img src={videot} alt="logo" />
				</div>
				<h4>Live</h4>
			</div>
			<div className={classes.line}></div>
			<h5 className={classes.suggest_account}>Suggested accounts</h5>
			<MicroCard />
			<div className={classes.line}></div>
			<div className={classes.followers_accounts}>
				<h3>Following accounts</h3>
				<h4>Accounts you follow will appear here</h4>
			</div>
		</div>
	);
}

export default Followers;

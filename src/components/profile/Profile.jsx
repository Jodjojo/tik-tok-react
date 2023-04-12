import React from "react";
import Card from "../card/Card";
import Followers from "../followers/Followers";
import classes from "./profile.module.css";

import ProfileHeader from "./../profileheader/ProfileHeader";

function Profile() {
	return (
		<div className={classes.main_profile_banner}>
			<ProfileHeader />
			<Followers />
			<Card />
		</div>
	);
}

export default Profile;

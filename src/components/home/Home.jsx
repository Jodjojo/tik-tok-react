import React from "react";
import Card from "../card/Card";
import Followers from "../followers/Followers";
import Header from "../header/Header";
import classes from "./home.module.css";

function Home() {
	return (
		<div className={classes.home_banner}>
			<Header />
			<Followers />
			<Card />
		</div>
	);
}

export default Home;

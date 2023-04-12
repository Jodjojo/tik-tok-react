import React from "react";
import classes from "./minicard.module.css";

function Minicard() {
	return (
		<div className={classes.minicard}>
			<div className={classes.suggest_follow}>
				<h5>Follow</h5>
			</div>
		</div>
	);
}

export default Minicard;

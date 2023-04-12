import React from "react";
import profile2 from "../../images/goddy.jpg";
import profile from "../../images/pese.jpg";
import profile3 from "../../images/jus.jpg";
import profile4 from "../../images/godison.jpg";
import "./microcard.css";

function MicroCard() {
	return (
		<div className="microcard">
			<div className="microcard-section ">
				<img className="img-profile" src={profile2} alt="profile" />
				<div className="micro-content">
					<h5 className="bold">Dabza</h5>
					<p>Dabibi tere</p>
				</div>
			</div>
			<div className="microcard-section">
				<img className="img-profile" src={profile} alt="profile" />
				<div className="micro-content">
					<h5 className="bold">dabza</h5>
					<p>Dabibi tere</p>
				</div>
			</div>
			<div className="microcard-section ">
				<img className="img-profile" src={profile3} alt="profile" />
				<div className="micro-content">
					<h5 className="bold">Perry</h5>
					<p>Dabibi tere</p>
				</div>
			</div>
			<div className="microcard-section">
				<img className="img-profile" src={profile4} alt="profile" />
				<div className="micro-content">
					<h5 className="bold">Mercy</h5>
					<p>Dabibi tere</p>
				</div>
			</div>
			<div>
				<h4 className="next">See all</h4>
			</div>
		</div>
	);
}

export default MicroCard;

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./login.css";

import user from "../../images/user.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import instagram from "../../images/instagram.svg";
import google from "../../images/google.svg";
import apple from "../../images/apple.svg";

const Login = () => {
	return (
		<div className="base">
			<div className="login-content">
				<h3>Log in to TikTok</h3>
				<p>
					{" "}
					Manage your account,check notifications,comment on videos, and more .
				</p>
				<div className="btnClass">
					<button className="btn-social">
						<span className="btn__icon">
							<img src={user} alt="logo" />
						</span>
						<span className="btn__text"> Use phone/email/username</span>
					</button>
					<button className="btn-socials">
						<span className="btn__icon">
							{" "}
							<img src={facebook} alt="logo" />
						</span>
						<span className="btn__text">Continue with Facebook</span>
					</button>
					<button className="btn-social">
						<span className="btn__icon">
							<img src={google} alt="logo" />
						</span>
						<span className="btn__text"> Continue with Google</span>
					</button>
					<button className="btn-social">
						<span className="btn__icon">
							{" "}
							<img src={twitter} alt="logo" />
						</span>
						<span className="btn__text"> Continue with Twitter</span>
					</button>
					<button className="btn-social">
						<span className="btn__icon">
							{" "}
							<img src={apple} alt="logo" />
						</span>
						<span className="btn__text"> Continue with Apple</span>
					</button>
					<button className="btn-social">
						<span className="btn__icon">
							<img src={instagram} alt="logo" />
						</span>
						<span className="btn__text">Continue with Instagram</span>
					</button>
				</div>
				<footer>
					{" "}
					<p>
						Dont have an account? <a href="d">Sign up</a>
					</p>
				</footer>
			</div>
		</div>
	);
};

export default Login;

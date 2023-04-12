/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import classes from "./card.module.css";
import profile from "../../images/goddy.jpg";
import share from "../../images/share.svg";
import heart from "../../images/heart.svg";
import comment from "../../images/comment.svg";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedVideo } from "@cloudinary/react";
import {
	reverse,
	blur,
	deshake,
	noise,
	loop,
	boomerang,
} from "@cloudinary/url-gen/actions/effect";
import { by3dLut } from "@cloudinary/url-gen/actions/adjust";
import { border } from "@cloudinary/url-gen/qualifiers/background";
import Minicard from "../minicard/Minicard";
import { VideContext } from "../../App";
function Card() {
	const { uploads } = useContext(VideContext);
	console.log(uploads);
	const cld = new Cloudinary({
		cloud: {
			cloudName: "pueneh",
		},
	});
	// const arrValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<div className={classes.cardContainer}>
			{uploads.map((item) => (
				<div key={item} className={classes.center_div}>
					<div className={classes.break} />
					<div className={classes.card_section}>
						<div className={classes.user_info}>
							<img
								className={classes.user_profile}
								src={profile}
								alt="profile"
							/>
							<div>
								<div className={classes.section_profile}>
									<div>
										<h3 className={classes.bold}>Emmzy</h3>
										<p className={classes.username}>Emma Mbonu</p>
									</div>
									{/* <div>
                    <Minicard />
                  </div> */}
								</div>

								<h5>{item.caption}</h5>
							</div>
						</div>
					</div>
					<div className={classes.video_socials}>
						<div
						// className={classes.video}
						>
							<AdvancedVideo
								className={classes.video}
								cldVid={
									cld
										.video(item.videoUrl)
										.effect(blur().strength(item.transformState.blur))
										.effect(
											deshake().shakeStrength(item.transformState.deshake)
										)
										.effect(boomerang(item.transformState.boomerang))

										// .effect(noise(item.transformState.noise))
										.effect(loop(item.transformState.loop))
									// .effect(border(item.transformState.borders))
									// .effect(reverse(item.transformState.reverse))
									// .effect(by3dLut(item.transformState.by3dLut))
								}
								controls
							/>
							{/* <video controls className={classes.video}>
                {" "}
                <source
                  src="https://v16-webapp.tiktok.com/e4acd1d6617991162bdd67a44528d24d/62584776/video/tos/useast2a/tos-useast2a-ve-0068c001/9a3edbe7c4bb4b8081383916fb376214/?a=1988&br=612&bt=306&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HF2Myq8ZJf~hwe2N9twyl7Gb&l=2022041410084101019018602909029870&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anY6dzQ6ZmU4PDMzNzczM0ApOjk4N2U8ZWU0NzxnZWgzO2c1NDVscjQwZC1gLS1kMTZzczJiYV8xNTJeYDYuYzYwL146Yw%3D%3D&vl=&vr="
                  type="video/mp4"
                />
              </video> */}
							{/* {videoSrc ? (
              <AdvancedVideo
                cldVid={cld
                  .video(videoSrc)
                  .effect(blur(transformState.blur))
                  .effect(deshake(transformState.deshake))
                  .effect(boomerang(transformState.boomerang))
                  .effect(noise(transformState.noise))
                  .effect(loop(transformState.loop))
                  .effect(border(transformState.borders))
                  .effect(reverse(transformState.reverse))
                  .effect(by3dLut(transformState.by3dLut))}
                controls
              />
            ) : (
              <div></div>
            )} */}
						</div>

						<div className={classes.socials}>
							<div className={classes.icon}>
								<img src={heart} alt="heart" />
							</div>

							<div className={classes.social_tag}>5.1m</div>
							<div className={classes.icon}>
								<img src={comment} alt="comment" />
							</div>

							<div className={classes.social_tag}>20.3k</div>
							<div className={classes.icon}>
								<img src={share} alt="share" />
							</div>

							<div className={classes.social_tag}>4000</div>
						</div>
					</div>
				</div>
			))}
			<div></div>
		</div>
	);
}

export default Card;

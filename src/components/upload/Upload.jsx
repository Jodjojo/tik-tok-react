/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import classes from "./upload.module.css";
import upload from "../../images/upload.svg";
import { AdvancedVideo } from "@cloudinary/react";
import {
	reverse,
	accelerate,
	blur,
	deshake,
	noise,
} from "@cloudinary/url-gen/actions/effect";
import { Cloudinary } from "@cloudinary/url-gen";
import { VideContext } from "../../App";
import { useNavigate } from "react-router-dom";

function handleErrors(response) {
	if (!response.ok) {
		throw Error(response.statusText);
	}
	return response;
}
function Upload() {
	const router = useNavigate();
	const [file, setFile] = useState(null);
	const [caption, setCaption] = useState("");
	const [isPost, setIsPost] = useState(false);
	const [videoState, setVideoState] = useState("");
	const [transformState, setTransformState] = useState({
		blur: 500,
		deshake: 32,
		noise: 50,
		loop: "34",
		reverse: "backwards",
		boomerang: "5.0",
		borders: "solid 5 red",
		by3dLut: "iwltbap_aspen.3dl",
	});

	const [cldCloudName, setCldCloudName] = useState("");

	const [loading, setLoading] = useState(false);
	const [preset, setPreset] = useState("");

	const handleCloudName = (e) => {
		setCldCloudName(e.target.value);
	};
	const handlePresetName = (e) => {
		setPreset(e.target.value);
	};

	const onChange = (e) => {
		setTransformState({
			...transformState,
			[e.target.name]: e.target.value,
		});
	};

	const cld = new Cloudinary({
		cloud: {
			cloudName: "pueneh",
		},
	});

	const handleEventChange = (e) => {
		const read = e.target.files[0];
		setFile(read);
	};
	const handleSubmit = () => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", preset);
		setLoading(true);
		fetch(`https://api.cloudinary.com/v1_1/${cldCloudName}/upload`, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			// .then((res) => console.log(res))
			.then((res) => {
				console.log(res);
				setVideoState(res.public_id);
				setTransformState((prev) => ({
					...prev,
					noise: res.noise,
					blur: res.blur,
				}));

				setLoading(false);
				setIsPost(true);
			})
			.then(handleErrors);
	};
	const { onHandleUpload } = useContext(VideContext);

	const handleUpload = () => {
		const data = {
			caption,
			videoUrl: videoState,
			transformState,
		};
		onHandleUpload(data);
		setIsPost(false);
		router("/");
	};

	return (
		<div className={`${classes.upload_banner} `}>
			<div className={classes.upload_content}>
				<div className={classes.first_wrapper}>
					<div className={classes.first_wrapper__content}>
						<h3>Upload video</h3>
						<h4>Post a video to your account</h4>
					</div>

					<div className={classes.zone}>
						<div className={classes.inner__content}>
							<img src={upload} alt="logo" />
							<div>
								<h4>Select video to upload</h4>
							</div>
							<span>Or drag and drop a file</span>
							<p>MP4 or WebM</p>
							<span>
								720x1280 resolution or higher up to 180 seconds Less than 1GB
							</span>
							<div className={classes.selectFile}>
								<label for="file">Select file</label>
								<input
									className={classes.input_text}
									type="file"
									name="files[]"
									id="file"
									onChange={handleEventChange}
								/>
							</div>
						</div>
					</div>
					<div>
						{/* {loading && <p>Loading...</p>} */}
						{videoState ? (
							<AdvancedVideo
								// src={}
								cldVid={cld
									.video(videoState)
									.effect(
										noise(transformState.noise)
										// .blur(transformState.blur)
										// .resize(
										// fill(transformState.fill)
										//   .width(transformState.width)
										//   .height(transformState.height)

										// .gravity(
										//   Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))
										// )
									)
									.effect(blur(transformState.blur))
									.effect(deshake(transformState.deshake))}
								controls
							/>
						) : (
							<div></div>
						)}
					</div>
				</div>
				<div className={classes.second_wrapper}>
					<label htmlFor="">Caption</label>

					<input
						className={classes.caption}
						type="text"
						onChange={({ target }) => setCaption(target.value)}
						value={caption}
						name=""
						placeholder="@ #"
					/>
					<div className={classes.input_box}>
						<label htmlFor="">
							Cloud Name:
							<input
								onChange={handleCloudName}
								type="text"
								value={cldCloudName}
								name="cloudname"
								placeholder="Enter the cloud name here"
							/>
						</label>

						<label htmlFor="">
							Upload Preset:{" "}
							<input
								onChange={handlePresetName}
								type="text"
								value={preset}
								name="preset"
								placeholder="Enter the upload presets here"
							/>
						</label>
					</div>

					<div>
						<div className={classes.first_effect}>
							<div>
								<label htmlFor="">
									Blur:
									<input
										type="range"
										name="blur"
										className={classes.loop}
										min="0"
										max="2000"
										onChange={onChange}
										value={transformState.blur}
									/>
								</label>
							</div>
							<div>
								<label htmlFor="">
									Virtual Noise:
									<input
										type="range"
										name="noise"
										className={classes.loop}
										min="0"
										max="2000"
										onChange={onChange}
										value={transformState.noise}
									/>
								</label>
							</div>
							<div>
								<label htmlFor="">
									Deshake:{" "}
									<input
										type="range"
										name="deshake"
										className={classes.loop}
										min="0"
										max="64"
										onChange={onChange}
										value={transformState.deshake}
									/>
								</label>
							</div>
							<div className={classes.visual}>
								<label htmlFor="">
									Loop:{" "}
									<input
										type="range"
										name="loop"
										className={classes.loop}
										min="1"
										max="10"
										onChange={onChange}
										value={transformState.loop}
									/>
								</label>
							</div>
							{/* <div className="visual">
                <label htmlFor="">
                  Visual noise:{" "}
                  <input
                    type="range"
                    name="visual-noise"
                    id="visual-noise"
                    value={transformState.noise}
                    onChange={onChange}
                    min="0"
                    max="2000"
                  />
                </label>
              </div> */}
						</div>
						<div className={classes.second_effect}>
							<div>
								<div className={classes.boomerang}>
									<label htmlFor="">Boomerang:</label>
									<select
										name="startOffset"
										id="startOffset"
										className={classes.select_effect}
									>
										<option value="">startOffset</option>
										<option value="">1.0</option>
										<option value="">2.o</option>
										<option value="">3.0</option>
										<option value="">4.0</option>
										<option value="">5.0</option>
									</select>
									<select
										name=" endOffSet"
										id=" endOffSet"
										className={classes.select_effect}
									>
										<option value=" endOffSet"> endOffSet</option>
										<option value="">1.0</option>
										<option value="">2.o</option>
										<option value="">3.0</option>
										<option value="">4.0</option>
										<option value="">5.0</option>
									</select>
								</div>
							</div>
							<div>
								<button className={classes.btn_lut}>Lut</button>
							</div>
							<div>
								<div className={classes.borders}>
									<label htmlFor="">Borders:</label>
									<select
										name="width"
										id="width"
										className={classes.select_effect}
									>
										<option value="">1</option>
										<option value="">2</option>
										<option value="">3</option>
										<option value="">4</option>
										<option value="">5</option>
									</select>
									<select
										name="color"
										id="color"
										className={classes.select_effect}
									>
										<option value="">red</option>
										<option value="">green</option>
										<option value="">blue</option>
										<option value="">black</option>
										<option value="">yellow</option>
									</select>
								</div>
							</div>
						</div>

						<div>
							{loading && <p>Loading...</p>}
							{!isPost ? (
								<button
									className={classes.btn_submit}
									onClick={handleSubmit}
									disabled={(!cldCloudName, !preset, loading)}
								>
									Upload
								</button>
							) : (
								<button className={classes.btn_submit} onClick={handleUpload}>
									post
								</button>
							)}
						</div>
					</div>

					{/* 
          
          <label htmlFor="">Cover</label>
          <textarea name="" id="cover" cols="30" rows="10"></textarea>
          <label for="country">Who can view this video</label>
          <select id="country" name="country" className="form-content">
            <option value="public">Public</option>
            <option value="friends">Friends</option>
            <option value="private">Private</option>
          </select>

          <label htmlFor="">Allow users to:</label>
          <div>
            <div className="checked-input">
              <label class="comment-banner">
                <input type="checkbox" checked="checked" />
                <span class="comment"></span>
                Comment
              </label>

              <label class="comment-banner">
                <input type="checkbox" checked="checked" />
                <span class="comment"></span>
                Duet
              </label>

              <label class="comment-banner">
                <input type="checkbox" checked="checked" />
                <span class="comment"></span>
                Stitch
              </label>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            <label htmlFor="">Run a copy check</label>

            <label className="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>
          <p style={{ color: "grey" }}>
            We'll check your video for potential copyright infringements on used
            sounds. If infringements are found, you can edit the video before
            posting.{" "}
            <a
              href="http://tracy.com"
              style={{ textDecoration: "none", color: "#000" }}>
              Learn more
            </a>
          </p> */}
				</div>
			</div>
		</div>
	);
}

export default Upload;

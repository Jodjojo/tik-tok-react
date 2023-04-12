/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useContext, useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";

import UploadPage from "./components/uploadpage/UploadPage";
import VideoEdit from "./components/videoeditor/VideoEditor";

export const VideContext = createContext(null);
function App() {
	const [uploads, setUploads] = useState([]);

	function onHandleUpload(data) {
		setUploads([...uploads, data]);
	}

	return (
		<VideContext.Provider value={{ uploads, onHandleUpload }}>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/profile" element={<Profile />} />
					<Route exact path="/upload" element={<UploadPage />} />
					<Route exact path="/video" element={<VideoEdit />} />
					<Route exact path="/login" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</VideContext.Provider>
	);
}

export default App;

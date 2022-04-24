import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Homepage/Homepage";
import Watchpage from "./Watchpage/Watchpage";
import "./Common/Common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="watch" element={<Watchpage />} />
		</Routes>
	</BrowserRouter>,
);

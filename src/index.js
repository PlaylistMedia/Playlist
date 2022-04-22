import React from "react";
import ReactDOM from "react-dom/client";
//import Homepage from "./Homepage/Homepage";
import Watchpage from "./Watchpage/Watchpage";
import "./Common/Common.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Watchpage />
	</React.StrictMode>,
);

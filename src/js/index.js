//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./Views/Main.jsx";

//render your react applicatioH
ReactDOM.render(<Home />, document.querySelector("#app"));

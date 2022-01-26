import React from "react";
import "../HeaderTitle/Title.css";
// import BackVideo from "../../../img/backgroundTitle.mp4";
const HeaderTitle = () => {
	return (
		<div>
			<div className="Container">
				<div className="Title">
					<h1 className="titleLetters">Keyboard Warriors</h1>

					<h4>
						<div className="Slogan"></div>
						Inventamos tu{" "}
						<strong className="strongTitle">pasado</strong>,
						trabajamos tu{" "}
						<strong className="strongTitle">presente</strong> y
						desarrollammos tu{" "}
						<strong className="strongTitle"> Futuro</strong>
					</h4>
				</div>
			</div>
		</div>
	);
};

export default HeaderTitle;

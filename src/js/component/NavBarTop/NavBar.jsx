import React from "react";
import "../NavBarTop/NavBar.css";
const NavBar = () => {
	return (
		<ul className="nav">
			<li className="nav-item">
				<a className="nav-link active">
					<strong>Home</strong>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link active">
					<strong>Proyects</strong>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link active">
					<strong>Front-End</strong>
				</a>
			</li>
		</ul>
	);
};

export default NavBar;

import React from "react";
import "../NavBarTop/NavBar.css";
const NavBar = () => {
	return (
		<ul className="nav">
			<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">
					<strong>Active</strong>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">
					<strong>Active</strong>
				</a>
			</li>
			<li className="nav-item">
				<a className="nav-link active" aria-current="page" href="#">
					<strong>Active</strong>
				</a>
			</li>
		</ul>
	);
};

export default NavBar;

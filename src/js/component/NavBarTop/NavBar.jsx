import React from "react";
import "../NavBarTop/NavBar.css";
const NavBar = () => {
	return (
		<div className="row">
			<div className="NavBar">
				<nav className="navbar navbar-expand-lg">
					<div className="container-fluid">
						<button
							className="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a
										className="nav-link"
										aria-current="page"
										href="#">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a
										target="_blank"
										className="nav-link"
										href="https://github.com/leotranq/Landing-page-react-Keyboard-Warriors/tree/footer">
										Projects
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Front end
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										Back end
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};

export default NavBar;

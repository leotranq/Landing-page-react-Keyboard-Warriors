import React from "react";
import ContentCards from "./ContentCards/Content.jsx";
import NavBarHeader from "./NavbarHeader/NavBarHeader.jsx";
import NavBar from "./NavbarTop/NavBar/NavBar.jsx";

const Home = () => {
	return (
		<>
			<NavBar />;
			<NavBarHeader />;
			<ContentCards />;
		</>
	);
};

export default Home;

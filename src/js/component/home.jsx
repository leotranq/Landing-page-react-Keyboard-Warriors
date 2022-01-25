import React from "react";
import ContentCards from "./ContentCards/Content.jsx";
import NavBarHeader from "./HeaderTitle/HeaderTitle.jsx";
import NavBar from "./NavBarTop/NavBar.jsx";

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

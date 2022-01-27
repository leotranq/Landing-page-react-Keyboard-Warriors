import React from "react";
import Form from "../component/Form/Form.jsx";
import Footer from "../component/Footer/Footer.jsx";
import NavBar from "../component/NavBarTop/NavBar.jsx";
import HeaderTitle from "../component/HeaderTitle/HeaderTitle.jsx";
import ContentCards from "../component/ContentCards/Content.jsx";
const Home = () => {
	return (
		<>
			<NavBar />
			<HeaderTitle />
			<ContentCards />
			<Form />
			<Footer />
		</>
	);
};

export default Home;

import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
	return (
		<footer>
			<div className="row_footer">
				<div className="col-xl-12 text-center form">
					<a href="https://www.instagram.com/" target="_blank">
						<img src="https://img.icons8.com/fluency/45/000000/instagram-new.png" />
					</a>
					<a href="https://www.twitter.com/" target="_blank">
						<img src="https://img.icons8.com/fluency/45/000000/twitter-squared.png" />
					</a>
					<a href="https://www.github.com/" target="_blank">
						<img src="https://img.icons8.com/stickers/40/000000/github.png" />
					</a>

					<a href="https://www.linkedin.com/" target="_blank">
						<img src="https://img.icons8.com/color/40/000000/linkedin.png" />
					</a>
					<a href="https://www.facebook.com/" target="_blank">
						<img src="https://img.icons8.com/color/43/000000/facebook.png" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

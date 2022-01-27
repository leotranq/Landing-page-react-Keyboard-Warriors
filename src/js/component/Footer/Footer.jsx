import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
	return (
		<div className="Container">
			<footer>
				<div className="row">
					<div className="col-md-3 redes">
						<a href="https://www.instagram.com/" target="_blank">
							<img
								className="redes"
								src="https://img.icons8.com/fluency/45/000000/instagram-new.png"
							/>
						</a>
						<a href="https://www.twitter.com/" target="_blank">
							<img
								className="redes"
								src="https://img.icons8.com/fluency/45/000000/twitter-squared.png"
							/>
						</a>
						<a href="https://www.github.com/" target="_blank">
							<img
								className="redes"
								src="https://img.icons8.com/stickers/40/000000/github.png"
							/>
						</a>

						<a href="https://www.linkedin.com/" target="_blank">
							<img
								className="redes"
								src="https://img.icons8.com/color/40/000000/linkedin.png"
							/>
						</a>
						<a href="https://www.facebook.com/" target="_blank">
							<img
								className="redes"
								src="https://img.icons8.com/color/43/000000/facebook.png"
							/>
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;

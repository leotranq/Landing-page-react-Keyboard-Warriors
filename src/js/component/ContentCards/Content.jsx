import React from "react";
import "../ContentCards/Content.css";
const ContentCards = () => {
	return (
		<>
			<div className="Cards_Body">
				<div className="cardOne" id="Carta1">
					<div className="Card_Content">
						<h5 className="card-title">Profesionalidad</h5>
						<p className="card-text">
							Gracias a años de experiencia y a nuestra
							metodologia perfeccionista, ofrecemos a nuestros
							clientes un servicio especializado acorde a sus
							necesidades.
						</p>
					</div>
					<a
						href="https://i.giphy.com/media/0lGElDgkbXFRKXsAro/giphy.webp"
						target="_blank">
						<input
							className="btn_form"
							type="button"
							value="Saber más"
						/>
					</a>
				</div>

				<div className="cardTwo">
					<div className="Card_Content">
						<h5 className="card-title">Seguridad</h5>
						<p className="card-text">
							Nuestros expertos, realizando encriptados,
							protegeran todos tus archivos contra los posibles
							ataques.
						</p>
					</div>
					<a
						href="https://www.youtube.com/watch?v=V9dDS-vl95Y"
						target="_blank">
						<input
							className="btn_form"
							type="button"
							value="Saber más"
						/>
					</a>
				</div>

				<div className="cardThree">
					<div className="Card_Content">
						<h5 className="card-title">Creatividad</h5>
						<p className="card-text">
							Contamos con un equipo de diseñadores graficos con
							años de experiencia en el sector. Capaces de plasmar
							al 100% la esencia de tu idea.
						</p>
					</div>
					<a
						href="https://i.giphy.com/media/13FrpeVH09Zrb2/giphy.webp"
						target="_blank">
						<input
							className="btn_form"
							type="button"
							value="Saber más"
						/>
					</a>
				</div>
				<div className="cardTwo">
					<div className="Card_Content">
						<h5 className="card-title">Innovación</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the card's content.
						</p>
					</div>
					<a
						href="https://reygif.com/media/7/y-asi-se-invento-la-rueda-92143.gif"
						target="_blank">
						<input
							className="btn_form"
							type="button"
							value="Saber más"
						/>
					</a>
				</div>
			</div>
		</>
	);
};

export default ContentCards;

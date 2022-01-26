import React from "react";
import "../Form/Form.css";

const Form = () => {
	return (
		<div className="container form">
			<div className="row" id="form">
				<div className="col-md-12">
					<form className="row g-3 needs-validation" novalidate>
						<h2 className="form_title">Contact us!</h2>

						<div className="col-md-4">
							<label
								for="validationCustom01"
								className="form-label">
								First name:
							</label>
							<input
								type="text"
								className="form-control name"
								id="validationCustom01"
								required
							/>
						</div>
						<div className="col-md-4">
							<label
								for="validationCustom02"
								className="form-label">
								Last name:
							</label>
							<input
								type="text"
								className="form-control"
								id="validationCustom02"
								required
							/>
						</div>
						<div className="col-md-4">
							<label
								for="validationCustom04"
								className="form-label">
								Interest:
							</label>
							<select
								className="form-select"
								id="validationCustom04"
								required>
								<option selected disabled value="">
									Select your interest:
								</option>
								<option value="website">Websites</option>
								<option value="smathphone_app">
									Smarthphone App
								</option>
								<option value="cyber_security">
									Cyber security
								</option>
							</select>
						</div>
						<div className="col-md-4">
							<label
								for="validationCustom05"
								className="form-label">
								Movile contact:
							</label>
							<input
								type="text"
								className="form-control telephone"
								id="validationCustom05 telephone"
								required
							/>
						</div>
						<div className="col-md-8">
							<label
								for="validationCustom05"
								className="form-label">
								Email:
							</label>
							<input
								type="email"
								className="form-control email"
								id="validationCustom05 email"
								required
							/>
						</div>
						<div className="col-md-12">
							<div className="form-check">
								<input
									className="form-check-input"
									type="checkbox"
									value=""
									id="invalidCheck"
									required
								/>
								<label
									className="form-check-label"
									for="invalidCheck">
									Agree to
									<a
										href="https://www.youtube.com/watch?v=989-7xsRLR4&t=40s"
										target="_blank"
										className="linkcondition">
										{" "}
										terms and conditions
									</a>
								</label>
							</div>
						</div>
						<div className="col-md-12">
							<button
								className="btn_form"
								type="submit"
								href="https://i.giphy.com/media/0lGElDgkbXFRKXsAro/giphy.webp">
								Submit form
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Form;

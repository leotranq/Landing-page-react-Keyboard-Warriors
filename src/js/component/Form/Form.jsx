import React from "react";
import "../Form/Form.css";

const Form = () => {
	return (
		<div class="container form">
			<form class="row g-3 needs-validation" novalidate>
				<div className="row">
					<h2 className="form_title">Contact us!</h2>
				</div>
				<div class="col-md-4">
					<label for="validationCustom01" class="form-label">
						First name:
					</label>
					<input
						type="text"
						class="form-control name"
						id="validationCustom01"
						required
					/>
				</div>
				<div class="col-md-4">
					<label for="validationCustom02" class="form-label">
						Last name:
					</label>
					<input
						type="text"
						class="form-control"
						id="validationCustom02"
						required
					/>
				</div>
				<div class="col-md-4">
					<label for="validationCustom04" class="form-label">
						Interest:
					</label>
					<select
						class="form-select"
						id="validationCustom04"
						required>
						<option selected disabled value="">
							Select your interest:
						</option>
						<option value="website">Websites</option>
						<option value="smathphone_app">Smarthphone App</option>
						<option value="cyber_security">Cyber security</option>
					</select>
				</div>
				<div class="col-md-4">
					<label for="validationCustom05" class="form-label">
						Movile contact:
					</label>
					<input
						type="text"
						class="form-control telephone"
						id="validationCustom05 telephone"
						required
					/>
				</div>
				<div class="col-md-8">
					<label for="validationCustom05" class="form-label">
						Email:
					</label>
					<input
						type="email"
						class="form-control email"
						id="validationCustom05 email"
						required
					/>
				</div>
				<div class="col-12">
					<div class="form-check">
						<input
							class="form-check-input"
							type="checkbox"
							value=""
							id="invalidCheck"
							required
						/>
						<label class="form-check-label" for="invalidCheck">
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
				<div class="col-12">
					<button class="btn_form" type="submit">
						Submit form
					</button>
				</div>
			</form>
		</div>
	);
};

export default Form;

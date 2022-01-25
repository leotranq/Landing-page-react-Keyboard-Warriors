import React from "react";
// import * as PropTypes from "Prop-types";

const FormInputs = () => {
	return (
		<div class="container form">
			<form class="row g-3 needs-validation" novalidate>
				<div class="col-md-4">
					<label for="validationCustom01" class="form-label">
						First name
					</label>
					<input
						type="text"
						class="form-control name"
						id="validationCustom01"
						required
					/>
					<div class="valid-feedback">Looks good!</div>
				</div>
				<div class="col-md-4">
					<label for="validationCustom02" class="form-label">
						Last name
					</label>
					<input
						type="text"
						class="form-control"
						id="validationCustom02"
						value="Otto"
						required
					/>
					<div class="valid-feedback">Looks good!</div>
				</div>
				<div class="col-md-3">
					<label for="validationCustom04" class="form-label">
						Interest:
					</label>
					<select
						class="form-select"
						id="validationCustom04"
						required>
						<option selected disabled value="">
							Select your interest
						</option>

						<option value="website">Websites</option>
						<option value="smathphone_app">Smarthphone App</option>
						<option value="cyber_security">Cyber security</option>
					</select>
					<div class="invalid-feedback">
						Please select a valid state.
					</div>
				</div>
				<div class="col-md-3">
					<label for="validationCustom05" class="form-label">
						Movile contact
					</label>
					<input
						type="text"
						class="form-control telephone"
						id="validationCustom05 telephone"
						required
					/>
					<div class="invalid-feedback">
						Please provide a valid movile.
					</div>
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
							Agree to terms and conditions
						</label>
						<div class="invalid-feedback">
							You must agree before submitting.
						</div>
					</div>
				</div>
				<div class="col-12">
					<button class="btn btn-primary" type="submit">
						Submit form
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormInputs;

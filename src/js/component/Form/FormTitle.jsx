import React from "react";
import * as PropTypes from "prop-types";

const FormTitle = (props) => {
	return (
		<div className="Form Title">
			<h3>{props.title}</h3>
		</div>
	);
};
FormTitle.propTypes = {
	title: PropTypes.string,
};

export default FormTitle;

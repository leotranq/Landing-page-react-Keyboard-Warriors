import React from "react";
import * as PropTypes from "prop-types";

const FormTitle = (props) => {
	return (
		<div className="Form Title">
			<h1>{props.title}</h1>
		</div>
	);
};
FormTitle.prop.Types = {
	title: PropTypes.string,
};

export default FormTitle;

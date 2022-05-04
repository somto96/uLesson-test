import React from "react";

const Button = ({ type, text, ...rest }) => {
	return (
		<button {...rest} className="bg-ulesson-deep-orange text-white rounded-md px-3 py-1 text-sm">
			{text?.toUpperCase()}
		</button>
	);
};

export default Button;

import React from "react";
import PropTypes from "prop-types";
import btnBg from "assets/images/btnBg.png";

const Button = ({ block, text, ...rest }) => {
	if (block) {
		return (
			<button
				{...rest}
				className="text-white rounded-md p-3 bg-center bg-cover text-sm w-full"
				style={{
					backgroundImage: `url(${btnBg})`,
				}}
			>
				{text?.toUpperCase()}
			</button>
		);
	}
	return (
		<button
			{...rest}
			className="bg-ulesson-deep-orange text-white rounded-md px-3 py-1 text-sm"
		>
			{text?.toUpperCase()}
		</button>
	);
};

export default Button;
Button.defaultProps = {
	text: "See All",
	block: false,
};

Button.propTypes = {
	type: PropTypes.string,
	block: PropTypes.bool,
};

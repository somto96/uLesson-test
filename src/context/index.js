import React from "react";
import PropTypes from "prop-types";
import DataContextWrapper from "context/dataContext";

const ContextGroupProvider = ({ children }) => (
	<DataContextWrapper>{children}</DataContextWrapper>
);

ContextGroupProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.number,
		PropTypes.string,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default ContextGroupProvider;

import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import {
	getAllDataUrl
} from "utils/apiUrls";
import { makeRequest } from "utils/apiService";
import useToggle from "utils/hooks/useToggle";
import { PageLoader } from "views/reusables";

export const DataContext = createContext();

const DataContextWrapper = ({ children }) => {
	const [allLessons, setAllLessons ] = useState(null);
	const [suggestions, setSuggestions] = useState(null);
	const [loading, toggleLoading] = useToggle();

	const selectedSuggestions = (sample) => {
		const suggestions = [];
		suggestions.push(
			{	
				id: sample?.[2]?.id,
				data: sample?.[2]?.chapters?.[0],
				name: sample?.[2]?.name
			},
			{
				id: sample?.[3]?.id,
				data: sample?.[3]?.chapters?.[2],
				name: sample?.[3]?.name
			},
			{
				id: sample?.[4]?.id,
				data: sample?.[4]?.chapters?.[1],
				name: sample?.[4]?.name
			},
			{
				id: sample?.[0]?.id,
				data: sample?.[0]?.chapters?.[0],
				name: sample?.[0]?.name
			},
		)
		return setSuggestions(suggestions);
		
	}

	//  GET all requied data
	const getAllLessons = async () => {
		toggleLoading();
		try {
			const response = await makeRequest.get(getAllDataUrl);
			if (response?.data?.data) {
				const requiredData = response?.data?.data?.subjects?.filter(x => x?.id <= 85)
				selectedSuggestions(requiredData);
				setAllLessons(requiredData);
			}
			toggleLoading();
		} catch (error) {
			toggleLoading();
			console.log("lessons-error", { error });
			console.log("lessons-error-test", error);
		}
	};

	return (
		<DataContext.Provider
			value={{
				getAllLessons,
				state: {
					allLessons,
					suggestions
				},
			}}
		>
			{loading && <PageLoader />}
			{children}
		</DataContext.Provider>
	);
};

DataContextWrapper.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.number,
		PropTypes.string,
		PropTypes.object,
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]),
};

export const useDataContext = () => useContext(DataContext);

export default DataContextWrapper;

import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
// import { responseMessageHandler } from "utils/libs";
import {
	getAllDataUrl
} from "utils/apiUrls";
// import notification from "utils/libs/notification";
import { makeRequest } from "utils/apiService";
import useToggle from "utils/hooks/useToggle";
import { PageLoader } from "views/reusables";

export const DataContext = createContext();

const DataContextWrapper = ({ children }) => {
	const [allLessons, setAllLessons ] = useState(null);
	const [suggestions, setSuggestions] = useState(null);
	const [loading, toggleLoading] = useToggle();

	//  GET all requied data
	const getAllLessons = async () => {
		toggleLoading();
		try {
			const response = await makeRequest.get(getAllDataUrl);
			if (response?.data?.data) {
				const requiredData = response?.data?.data?.subjects?.filter(x => x?.id <= 85)
				setAllLessons(requiredData);
			}
			toggleLoading();
		} catch (error) {
			toggleLoading();
			console.log("lessons-error", { error });
			console.log("lessons-error-test", error);
			// notification.error(responseMessageHandler({ error }));
		}
	};

	const selectedSuggestions = () => {
		const suggestions = [];
		suggestions.push(
			{	
				id: allLessons?.[2]?.id,
				data: allLessons?.[2]?.chapters?.[0],
				name: allLessons?.[2]?.name
			},
			{
				id: allLessons?.[3]?.id,
				data: allLessons?.[3]?.chapters?.[2],
				name: allLessons?.[3]?.name
			},
			{
				id: allLessons?.[4]?.id,
				data: allLessons?.[4]?.chapters?.[1],
				name: allLessons?.[4]?.name
			},
			{
				id: allLessons?.[0]?.id,
				data: allLessons?.[0]?.chapters?.[0],
				name: allLessons?.[0]?.name
			},
		)
		return setSuggestions(suggestions);
		
	}


	return (
		<DataContext.Provider
			value={{
				getAllLessons,
				selectedSuggestions,
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

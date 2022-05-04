import React, { useEffect } from "react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "routes/constants";
import { NavigationBar} from "views/reusables";
import SuggestionsComponent from "views/pages/components/SuggestionsComponent";
import Hand from "assets/svgs/handFigure.svg";
import BottomRightAbstract from "assets/svgs/beanBagFigure.svg";
import { requiredSubjectsList } from "./constants";
import { useDataContext } from "context/dataContext";
import useWindowSize from "utils/hooks/useWindowSize";

const Home = () => {
	const navigate = useNavigate();
	const { width } = useWindowSize();
	const {
		getAllLessons,
    selectedSuggestions,
		state: { allLessons, suggestions },
	} = useDataContext();

	useEffect(() => {
		getAllLessons();
	}, []);

	useEffect(() => {
		selectedSuggestions();
	}, [allLessons]);

	allLessons && console.log("lessons", allLessons);
	allLessons && console.log("suggestions", suggestions);


	return (
		<>
			<NavigationBar />

			{width > 768 && (
				<div className="absolute text-center top-0 left-0 z-0">
					<img alt="" src={Hand} />
				</div>
			)}

			{width > 768 && (
				<div className="absolute text-center bottom-0 right-0 z-0">
					<img alt="" src={BottomRightAbstract} />
				</div>
			)}

			<div className="w-full container my-auto py-12 relative z-1 space-y-16">
				<h1 className="font-normal text-4xl text-ulesson-navbg itim-font-style"> Hello Hassan, </h1>
				<div className="grid md:grid-cols-5 grid-cols-2 text-white gap-4">
					{requiredSubjectsList?.map(
						({
							id,
							subject,
							isMath,
							isPhy,
							isBio,
							isChem,
							isEng,
							symbol: Symbol,
							abstractSvg: AbstractSvg,
						}) => (
							<div
								key={id}
								onClick={() => navigate(`${APP_PATHS.SUBJECT_DETAILS}/${id}`)}
								className={clsx(
									isMath && "bg-ulesson-deep-orange",
									isChem && "bg-ulesson-orange",
									isBio && "bg-ulesson-green",
									(isPhy || isEng) && "bg-ulesson-blue",
									"rounded-xl",
									"flex",
									"flex-col",
									"relative",
									"cursor-pointer",
									"p-5"
								)}
							>
								<div className="text-left grow z-10">
									<Symbol />
								</div>

								<div className="text-right flex-none z-10">
									{subject?.toUpperCase()}
								</div>
								<div
									className={clsx(
										"absolute",
										isMath && "top-0 right-2",
										isEng && "bottom-0 left-0",
										isPhy && "bottom-0 left-2",
										isChem && "bottom-0 right-2",
										isBio && "top-3 right-0",
										"z-0"
									)}
								>
									<AbstractSvg />
								</div>
							</div>
						)
					)}
				</div>
        <SuggestionsComponent mainText="Recently watched topics" btnText="See All" data={suggestions} />
        <SuggestionsComponent mainText="Recommended Videos" btnText="See All" data={suggestions} />
			</div>
		</>
	);
};

export default Home;

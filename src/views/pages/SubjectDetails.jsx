import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { APP_PATHS } from "routes/constants";
import { NavigationBar } from "views/reusables";
import { useDataContext } from "context/dataContext";
import LessonsComponent from "views/pages/components/LessonsComponent";
import useWindowSize from "utils/hooks/useWindowSize";
import { ReactComponent as GoBackIcon } from "assets/svgs/goBack.svg";
import { ReactComponent as NumbersIcon } from "assets/svgs/numbers.svg";

const SubjectDetails = () => {
	const { subject } = useParams();
	const navigate = useNavigate();
	const { width } = useWindowSize();
	const isMobile = width <= 768;
	const [selectedSubject, setSelectedSubject] = useState(null);
	const {
		getAllLessons,
		state: { allLessons },
	} = useDataContext();

	useEffect(() => {
		if(!allLessons?.length){
			getAllLessons();
		}
		
	},[allLessons, getAllLessons]);

	useEffect(() => {
		const filterSelectedSubject = () => {
			const filteredSubject = allLessons?.find(
				(video) => video?.name?.toLowerCase() === subject?.toLowerCase()
			);
			return setSelectedSubject(filteredSubject);
		};

		filterSelectedSubject();
	}, [allLessons, subject]);

	if (isMobile) {
		return (
			<div className="space-y-8">
				<NavigationBar />
				<div className="container space-y-8 p-5">
					<div className="flex items-center space-x-4">
						<div
							className="cursor-pointer text-sm "
							onClick={() => navigate(APP_PATHS.HOME)}
						>
							<GoBackIcon className="w-full h-4" />
						</div>
						<h1 className="font-normal text-4xl text-ulesson-navbg itim-font-style capitalize">
							{subject}
						</h1>
					</div>

					<div className="grid grid-cols-1 gap-4 space-y-8 text-center">
						{selectedSubject?.chapters?.map((data, index) => (
							<div className="space-y-4" key={data?.id}>
								s
								<h1 className="font-normal text-2xl text-ulesson-navbg itim-font-style">
									{`${index + 1}. ${data?.name}`}
								</h1>
								<LessonsComponent
									lessonsData={data?.lessons}
									topic={data?.name}
									subject={selectedSubject?.name}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-8">
			<NavigationBar />
			<div className="absolute text-center top-12 right-20 z-0">
				<NumbersIcon />
			</div>
			<div className="container">
				<div className="grid grid-cols-6 gap-4 py-5">
					<div
						className="cursor-pointer text-sm text-center relative"
						onClick={() => navigate(APP_PATHS.HOME)}
					>
						<GoBackIcon className="h-4 absolute top-2  right-2" />
					</div>
					<div className="col-span-5 space-y-8">
						<h1 className="font-normal text-4xl text-ulesson-navbg itim-font-style capitalize">
							{subject}
						</h1>

						{selectedSubject?.chapters?.map((data, index) => (
							<div className="space-y-4" key={data?.id}>
								<h1 className="font-normal text-2xl text-ulesson-navbg itim-font-style">
									{`${index + 1}. ${data?.name}`}
								</h1>
								<LessonsComponent
									lessonsData={data?.lessons}
									topic={data?.name}
									subject={subject}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default SubjectDetails;

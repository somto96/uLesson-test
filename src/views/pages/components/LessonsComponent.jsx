import React from "react";
import { APP_PATHS } from "routes/constants";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import dummyLessonImage from "assets/images/dummyLesson.png";

const LessonsComponent = ({ lessonsData, topic, subject }) => {
	console.log("test", lessonsData);
	const navigate = useNavigate();
	return (
		<div className="grid md:grid-cols-5 grid-cols-2 gap-4 relative z-1 text-center">
			{/* Test */}
			{lessonsData?.map((el, index) => (
				<div
					className="bg-white flex flex-col items-center justify-center cursor-pointer p-5 rounded-xl space-y-2 whitespace-normal"
					onClick={() =>
						navigate(`${APP_PATHS.WATCH_LESSON}/${el?.id}`, {
							state: {
								data: lessonsData,
								lessonTopic: topic,
								subjectName: subject,
							},
						})
					}
					key={el?.id}
				>
					<img alt="" src={el?.icon ?? dummyLessonImage} />
					<div className="text-base font-bold ">
						<p className="break-all"> {el?.name} </p>
					</div>
					{index === 0 && (
						<div className="border-solid border-1 border-white h-1 rounded bg-ulesson-gray w-full">
							<div className="w-1/2 h-full bg-ulesson-green rounded"></div>
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default LessonsComponent;
LessonsComponent.propTypes = {
	lessonsData: PropTypes.oneOfType([PropTypes.array]),
	topic: PropTypes.string,
	subject: PropTypes.string,
};

import React from "react";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import { APP_PATHS } from "routes/constants";
import ContextGroupProvider from "context";
import useNetworkStatus from "utils/hooks/useNetworkStatus";
import { PageLoader } from "views/reusables";


const Home = lazy(() => import("views/pages/Home.jsx"));
const SubjectDetails = lazy(() => import("views/pages/SubjectDetails"));
const WatchLesson = lazy(() => import("views/pages/WatchLesson"));

const AppRoutes = () => {
	const networkStatus = useNetworkStatus();
	return (
		<ContextGroupProvider>
			{!networkStatus && <PageLoader message="You are not connected to the internet. Waiting for a connection" />}
			<div className="min-h-screen w-full bg-ulesson-gray relative">
				<Routes>
					<Route path={APP_PATHS.HOME} element={<Home />} />
					<Route path={`${APP_PATHS.SUBJECT_DETAILS}/:subject`} element={<SubjectDetails />} />
					<Route path={`${APP_PATHS.WATCH_LESSON}/:lessonId`} element={<WatchLesson />} />
				</Routes>
			</div>
		</ContextGroupProvider>
	);
};

export default AppRoutes;

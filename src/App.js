import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "routes/AppRoutes";
import { PageLoader } from "views/reusables"

const App = () => {
	return (
		<Suspense fallback={<PageLoader />}>
			<Router>
				<AppRoutes />
			</Router>
		</Suspense>
	);
};

export default App;

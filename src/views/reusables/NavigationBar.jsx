import React from "react";
import { useNavigate } from "react-router-dom";
import { APP_PATHS } from "routes/constants";
import Logo from "assets/svgs/logo.svg";
import Avatar from "assets/svgs/avatar.svg";

const NavigationBar = () => {
	const navigate = useNavigate();
	return (
		<div className="w-full bg-ulesson-navbg px-5 py-3 flex items-center justify-between sticky top-0 z-20">
			<div className="cursor-pointer" onClick={() => navigate(APP_PATHS.HOME)}>
				<img className="w-auto h-5" alt="uLesson's Logo" src={Logo} />
			</div>
			<div className="flex items-center space-x-2">
				<img className="w-auto h-10" alt="User" src={Avatar} />
				<p className="opacity-40 text-white text-base">Hassan</p>
			</div>
		</div>
	);
};

export default NavigationBar;

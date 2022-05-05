import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import { Button } from "views/reusables";
import dummyImage from "assets/images/test.png";

import { ReactComponent as BluePlayIcon } from "assets/svgs/bluePlayIcon.svg";
import { ReactComponent as GreenPlayIcon } from "assets/svgs/greenPlayIcon.svg";
import { ReactComponent as OrangePlayIcon } from "assets/svgs/orangePlayIcon.svg";

const SuggestionsComponent = ({ data, mainText, btnText }) => {
	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<h5 className="font-normal text-2xl text-ulesson-navbg itim-font-style">
					{mainText}
				</h5>
				<Button text={btnText} />
			</div>
			<div className="grid grid-col-1 md:grid-cols-4 gap-4">
				{data?.map(({ id, name, chapters }) => (
					<div key={id} className="space-y-2">
						<div
							className="w-full h-56 bg-center bg-cover rounded-xl relative"
							style={{
								backgroundImage: `url(${data?.icon ?? dummyImage})`,
							}}
						>
							<div className="absolute flex items-center justify-center top-0 bottom-0 left-0 right-0">
								{id === 5 && <GreenPlayIcon />}
								{id === 3 && <BluePlayIcon />}
								{(id === 4 || id === 2) && <OrangePlayIcon />}
							</div>
						</div>
						<div
							className={clsx(
								"text-left text-base font-normal",
								id === 2 && "text-ulesson-deep-orange",
								id === 3 && "text-ulesson-blue",
								id === 4 && "text-ulesson-orange", 
								id === 5 && "text-ulesson-green"
							)}
						>
							<h6>{name}</h6>
						</div>
						<div
							className="text-left text-lg font-bold"
						>
							<p>{chapters?.name}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default SuggestionsComponent;

SuggestionsComponent.propTypes = {
	data: PropTypes.oneOfType([PropTypes.array]),
	mainText: PropTypes.string,
	btnText: PropTypes.string,
};

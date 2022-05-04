import React from "react";
import SampleVideo from "assets/videos/video.mp4";
import PlayIcon from "assets/svgs/play.svg";
import ForwardIcon from "assets/svgs/forward.svg";
import BackwardIcon from "assets/svgs/rewind.svg";

const WatchLesson = () => {
	return (
		<div className="w-full py-12 px-12">
			<div className="mx-auto my-auto relative">
				<video className="w-full h-auto rounded-2xl" src={SampleVideo}></video>
				<div className="flex items-center justify-center space-x-10 w-full z-20 absolute top-0 bottom-0 left-0 right-0 ">
					<img className="w-10 h-10 cursor-pointer" alt="" src={BackwardIcon} />
					<img
						className="w-20 h-20 cursor-pointer"
						alt=""
						src={PlayIcon}
						style={{ fill: "red" }}
					/>
					<img className="w-10 h-10 cursor-pointer" alt="" src={ForwardIcon} />
				</div>
				<div className="flex items-center absolute bottom-2 w-full space-x-5 p-10">
					<p className="text-white flex-none">1:02</p>
					<input
						type="range"
						min="0"
						max="100"
						className="h-1 z-30 flex-grow relative slider"
					/>
					<p className="text-white flex-none">2:05</p>
				</div>
			</div>
		</div>
	);
};

export default WatchLesson;

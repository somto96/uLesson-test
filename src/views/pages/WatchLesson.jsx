import React, { useRef, useMemo } from "react";
import clsx from "clsx";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { APP_PATHS } from "routes/constants";
import SampleVideo from "assets/videos/video.mp4";
import PlayIcon from "assets/svgs/play.svg";
import ForwardIcon from "assets/svgs/forward.svg";
import BackwardIcon from "assets/svgs/rewind.svg";
import { ReactComponent as GoBackIcon } from "assets/svgs/goBack.svg";
import { ReactComponent as VideoAbstractSvg } from "assets/svgs/videoAbstract.svg";
import { Button } from "views/reusables";
import useWindowSize from "utils/hooks/useWindowSize";
import useVideoPlayer from "utils/hooks/useVideoPlayer";

const WatchLesson = () => {
	const navigate = useNavigate();
	const { lessonId } = useParams();
	const videoElement = useRef(null);
	const {
		playerState,
		togglePlay,
		handleOnTimeUpdate,
		handleVideoProgress,
		// handleVideoSpeed,
		// toggleMute,
	} = useVideoPlayer(videoElement);
	const {
		state: { data, lessonTopic, subjectName },
	} = useLocation();
	const { width } = useWindowSize();
	const isMobile = width <= 768;
	const selectedVideo = () => {
		return data?.find((x) => x?.id === Number(lessonId));
	};
	const memoizedSelectedVideo = useMemo(() => selectedVideo(), [data]);

	console.log("selectedVideo", memoizedSelectedVideo);
	console.log("currentTime", playerState);
	if (isMobile) {
		return (
			<div className="p-5">
				<div
					className="cursor-pointer text-sm text-center relative"
					onClick={() => navigate(`${APP_PATHS.SUBJECT_DETAILS}/${subjectName}`)}
				>
					<GoBackIcon className="h-4 absolute top-5 left-2" />
				</div>
				<div className="container relative z-1 space-y-4 py-5">
					<div className="grid grid-cols-1 py-10">
						<div className="space-y-8">
							<div className="relative">
								<video
									controls
									className="w-full rounded-2xl"
									src={SampleVideo}
								></video>
								{/* <div className="flex items-center justify-center space-x-10 w-full z-20 absolute top-0 bottom-0 left-0 right-0 ">
									<div className="cursor-pointer">
										<img className="w-10 h-10" alt="" src={BackwardIcon} />
									</div>
									<div className="cursor-pointer" onClick={() => togglePlay("hello")}>
										<img
											className={clsx(
												"w-20 h-20",
												playerState?.isPlaying && "play-effects"
											)}
											alt=""
											src={PlayIcon}
										/>
									</div>
									<div className="cursor-pointer">
										<img className="w-10 h-10" alt="" src={ForwardIcon} />
									</div>
								</div>

								<div className="flex items-center absolute bottom-2 w-full space-x-5 p-3">
									<p className="text-white flex-none">1:02</p>
									<input
										type="range"
										min="0"
										max="100"
										className="h-1 z-30 flex-grow relative slider"
										value={playerState.progress}
										onChange={(e) => handleVideoProgress(e)}
									/>
									<p className="text-white flex-none">2:05</p>
								</div> */}
							</div>
						</div>
					</div>
					<div className="text-center space-y-4 w-full">
						<div className="font-bold text-2xl">
							<p>{memoizedSelectedVideo?.name}</p>
						</div>
						<div className="font-normal text-lg tracking-wide">
							<p className="opacity-40">{lessonTopic}</p>
						</div>
						<Button text="Next" block />
					</div>
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="absolute -top-1 right-0 z-0">
				<VideoAbstractSvg />
			</div>
			<div
				className="cursor-pointer text-sm text-center relative"
				onClick={() => navigate(`${APP_PATHS.SUBJECT_DETAILS}/${subjectName}`)}
			>
				<GoBackIcon className="h-4 absolute top-14 left-2" />
			</div>
			<div className="container relative z-1 space-y-4 py-5">
				<div className="grid grid-cols-1 py-10">
					<div className="space-y-8">
						<div className="relative">
							<video
								ref={videoElement}
								onTimeUpdate={handleOnTimeUpdate}
								className="w-full h-auto rounded-2xl"
								src={SampleVideo}
							></video>
							<div className={clsx("flex items-center justify-center space-x-10 w-full z-20 absolute top-0 bottom-0 left-0 right-0")}>
								<div className="cursor-pointer">
									<img className="w-10 h-10" alt="" src={BackwardIcon} />
								</div>
								<div className="cursor-pointer" onClick={() => togglePlay()}>
									<img
										className={clsx(
											"w-20 h-20",
											playerState?.isPlaying && "w-1 h-1 hover:w-20 hover:h-20"
										)}
										alt=""
										src={PlayIcon}
									/>
								</div>
								<div className="cursor-pointer">
									<img className="w-10 h-10" alt="" src={ForwardIcon} />
								</div>
							</div>
							<div className="flex items-center absolute bottom-2 w-full space-x-5 p-10">
								<p className="text-white flex-none opacity-60">{Math.floor(playerState?.currentTime / 60) + ":" + ("0" + Math.floor(playerState?.currentTime % 60)).slice(-2)}</p>
								<input
									type="range"
									min="0"
									max="100"
									className="h-1 z-30 flex-grow relative slider"
									value={playerState.progress}
									onChange={(e) => handleVideoProgress(e)}
								/>
								<p className="text-white flex-none opacity-60">
									{Math.floor(playerState?.videoDuration / 60) +
										":" +
										("0" + Math.floor(playerState?.videoDuration % 60)).slice(-2)}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center space-y-4 w-96 mx-auto">
					<div className="font-bold text-2xl">
						<p>{memoizedSelectedVideo?.name}</p>
					</div>
					<div className="font-normal text-lg tracking-wide">
						<p className="opacity-40">{lessonTopic}</p>
					</div>
					<Button text="Next" block />
				</div>
			</div>

			{/*  */}
		</>
	);
};

export default WatchLesson;

import { useEffect, useState } from "react";
const useVideoPlayer = (videoElement) => {
	// ...
	const [playing, setPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	// const [speed, setSpeed] = useState(1);
	// const [muted, setMuted] = useState(false);
	const [videoTime, setVideoTime] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	console.log("element", videoElement);

	const togglePlay = () => {
		setPlaying(!playing);
		setVideoTime(videoElement?.current?.duration);
		// console.log("it clicked", test)
	};

	useEffect(() => {
		playing ? videoElement?.current?.play() : videoElement?.current?.pause();
	}, [playing, videoElement]);

	const handleOnTimeUpdate = () => {
		const progress =
			(videoElement?.current?.currentTime / videoElement?.current?.duration) * 100;
		setCurrentTime(videoElement?.current?.currentTime);
		setProgress(progress);
	};
	const handleVideoProgress = (event) => {
		const manualChange = Number(event.target.value);
		videoElement.current.currentTime =
			(videoElement?.current?.duration / 100) * manualChange;
		setProgress(manualChange);
	};

	// const handleVideoSpeed = (event) => {
	//   const speed = Number(event.target.value);
	//   videoElement.current.playbackRate = speed;
	//   setSpeed(speed);
	// };

	// const toggleMute = () => {
	//   setMuted(!muted);
	// };

	// useEffect(() => {
	//   muted
	//     ? (videoElement.current.muted = true)
	//     : (videoElement.current.muted = false);
	// }, [muted, videoElement]);

	const fastForward = () => {
		videoElement.current.currentTime += 10;
	};

	const revert = () => {
		videoElement.current.currentTime -= 10;
	};

	return {
		playerState: {
			isPlaying: playing,
			progress: progress,
			videoDuration: videoTime,
			currentTime: currentTime,
		},
		togglePlay,
		handleOnTimeUpdate,
		handleVideoProgress,
		revert,
		fastForward,
	};
};

export default useVideoPlayer;

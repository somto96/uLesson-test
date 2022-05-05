import { useEffect, useState } from "react";

const useVideoPlayer = (videoElement) => {
	const [playing, setPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [videoTime, setVideoTime] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);

	const togglePlay = () => {
		setPlaying(!playing);
		setVideoTime(videoElement?.current?.duration);
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

	const fastForward = () => {
		videoElement.current.currentTime += 10;
	};

	const rewind = () => {
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
		rewind,
		fastForward,
	};
};

export default useVideoPlayer;

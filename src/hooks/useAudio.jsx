import React from 'react';
import { useState, useEffect } from 'react';

export const useAudio = (url) => {
	const [audio] = useState( new Audio(url) );
	const [isPlaying, setIsPlaying] = useState(false);

	const play = () => setIsPlaying(true);
	const pause = () => setIsPlaying(false);

	useEffect(
		() => {
			isPlaying ? audio.play() : audio.pause()
		},
		[isPlaying]
	);

	useEffect(
		() => {
			audio.addEventListener('ended', pause );

			return () => {
				audio.removeEventListener('ended', pause)
			}
		},
		[]
	);

	return [isPlaying, play, pause];
}

export default useAudio;
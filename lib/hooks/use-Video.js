import { useState } from "react";

const useVideo = () => {
  const [video, setVideo] = useState(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const playVideo = async (video) => {
    setVideo(video.current);
    setVideoLoaded(true);
    try {
      console.log("play video")
      // const constraints = { video: true, audio: false };
      // const stream = await navigator.mediaDevices.getUserMedia(constraints);
      // video.current.srcObject = video.current;
    } catch (error) {
      console.error("Error opening video camera.", error);
    }
  };

  const stopVideo = (video) => {
    setVideoLoaded(false);
    // const stream = video.current.srcObject;
    console.log("stopVideo")
    // const tracks = stream.getTracks();
    // tracks.forEach(function (track) {
    //   track.stop();
    // });
    // video.current.srcObject = null;
  };

  return { playVideo, stopVideo, video, videoLoaded, setVideoLoaded };
};

export default useVideo;

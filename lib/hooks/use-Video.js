import {useState} from "react";

const useVideo = () => {
    const LOADED_STATUS = 4;
    const [video, setVideo] = useState(null);
    const [videoLoaded, setVideoLoaded] = useState(false);

    const setVideoPlayerForMovementDetection = async (videoRef) => {
        setVideo(videoRef.current);
        setVideoLoaded(true);
        try {
            // console.log("play video check HERE: " + videoRef.current.id);
            const domElement = document.getElementById(videoRef.current.id);
            if (domElement && domElement.readyState === LOADED_STATUS) {
                console.log("video loaded")
                // Get Video Properties
                const video = domElement.src;
                domElement.setAttribute('crossOrigin', 'anonymous');
                const videoWidth = domElement.videoWidth;
                const videoHeight = domElement.videoHeight;
                // Set video width
                if (videoRef.current){
                    videoRef.current.width = videoWidth;
                    videoRef.current.height = videoHeight;
                }
            }
            // const constraints = { video: true, audio: false };
            // const stream = await navigator.mediaDevices.getUserMedia(constraints);
            // videoRef.current.srcObject = videoRef.current;
        } catch (error) {
            console.error("Error opening video camera.", error);
        }
        console.log("play video end")
    };

    const stopVideoRecording = (video) => {
        setVideoLoaded(false);
        const stream = video.current.srcObject;
        console.log("stopVideo")
        const tracks = stream.getTracks();
        tracks.forEach(function (track) {
            track.stop();
        });
        video.current.srcObject = null;
    };

    return {setVideoPlayerForMovementDetection, stopVideoRecording, video, videoLoaded, setVideoLoaded};
};

export default useVideo;

"use client"
import { Pause, Play } from "lucide-react"
import { useRef, useState } from "react"

const VideoSlider = ({ videoIndex }: { videoIndex: number }) => {
    const [videos] = useState([{
        src: "/videos/home/video_1.mp4",
        played: false,
        poster: "/images/Home/digitalLab/image_7.png"
    }, {
        src: "/videos/home/video_2.mp4",
        played: false,
        poster: "/images/Home/digitalLab/image_8.png"
    }]);
    
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const togglePlay = (e: React.MouseEvent, src: string) => {
        e.stopPropagation();
        const index = videos.findIndex((video) => video.src === src);
        const video = videoRefs.current[index];

        if (video) {
            if (!video.paused) {
                video.pause();
            } else {
                video.play();
            }
        }
    };

    const video = videos[videoIndex]; // Select the video based on the videoIndex

    return (
        <div className="relative flex items-center justify-center w-full">
            <video
                ref={(el) => {
                    videoRefs.current[videoIndex] = el;
                }}
                src={video.src}
                className="rounded-lg overflow-hidden w-full h-auto"
                loop
                poster={video.poster}
            />
            <button
                role="none"
                className="absolute bg-black/50 backdrop-blur-lg p-3 rounded-full text-white cursor-pointer active:scale-75 duration-700 z-50 transition-[opacity,visibility,transform]"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent event bubbling
                    togglePlay(e, video.src);
                }}
            >
                {video.played ? <Pause size={24} /> : <Play size={24} />}
            </button>
        </div>
    );
};

export default VideoSlider;

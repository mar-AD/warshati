"use client";
import { Pause, Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const videos = [
    {
        src: "/videos/home/video_1.mp4",
        poster: "/images/Home/digitalLab/image_7.png",
    },
    {
        src: "/videos/home/video_2.mp4",
        poster: "/images/Home/digitalLab/image_8.png",
    },
    {
        src: "/videos/home/video_1.mp4",
        poster: "/images/Blog/articles/article_9.jpg",
    },
    {
        src: "/videos/home/video_1.mp4",
        poster: "/images/Blog/articles/article_1.jpg",
    },
];

const VideoSlider = ({ videoIndex }: { videoIndex: number }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    const video = videos[videoIndex];

    useEffect(() => {
        const updateDimensions = () => {
        if (containerRef.current) {
            setDimensions({
            width: containerRef.current.offsetWidth,
            height: containerRef.current.offsetHeight
            });
        }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);

        return () => window.removeEventListener('resize', updateDimensions);
    }, [videoIndex]);

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        const video = videoRef.current;

        if (video) {
        if (video.paused) {
            video.play().catch(console.error);
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
        }
    };

    return (
        <div 
        ref={containerRef}
        className="relative w-full h-full bg-black rounded-lg overflow-hidden"
        style={{
            aspectRatio: dimensions.width && dimensions.height 
            ? `${dimensions.width}/${dimensions.height}`
            : undefined
        }}
        >
        <video
            ref={videoRef}
            src={video.src}
            className="absolute inset-0 w-full h-full object-cover"
            loop
            muted
            playsInline
            poster={video.poster}
            preload="metadata"
            style={{
            aspectRatio: dimensions.width && dimensions.height 
                ? `${dimensions.width}/${dimensions.height}`
                : undefined
            }}
        />

        <button
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            bg-white backdrop-blur-lg p-3 rounded-full cursor-pointer 
            transition-all duration-300 z-50 hover:bg-white/30
            ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
            onClick={togglePlay}
        >
            {isPlaying ? (
            <Pause size={40} fill="#6B37BD" stroke="6B37BD" />
            ) : (
            <Play size={40} fill="#6B37BD" stroke="6B37BD"/>
            )}
        </button>
        </div>
    );
};

export default VideoSlider;
"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils";
import { Pause, Play } from "lucide-react"
import { useRef, useState } from "react"

const VideoSlider = () => {
    const [videos, setVideos] = useState([{
        src: "/videos/video_1.mp4",
        played: false,
        poster: "/images/image_7.png"
    }, {
        src: "/videos/video_2.mp4",
        played: false,
        poster: "/images/image_8.png"
    }])
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const togglePlay = (e: React.MouseEvent, src: string) => {
        e.stopPropagation();
        const index = videos.findIndex((video) => video.src === src);
        const video = videoRefs.current[index];

        if (video) {
            if (!video.paused) {
                video.pause()
            } else {
                video.play();
            }


            setVideos((prevVideos) =>
                prevVideos.map((item) =>
                    item.src === src ? { ...item, played: !item.played } : item
                )
            );
        }
    };

    return (
        <Carousel
            opts={{
                loop: true,
            }}
            className="relative flex items-end justify-center w-fit"
        >
            <CarouselContent>
                {videos.map((video, i) => (
                    <CarouselItem
                        key={i}
                        className="relative flex items-center justify-center"
                        role="button"
                        onClick={(e) => togglePlay(e, video.src)}
                    >
                        <video
                            ref={(el) => {
                                videoRefs.current[i] = el;
                            }} src={video.src}
                            className="rounded-lg overflow-hidden h-auto"
                            loop
                            poster={video.poster}
                        />
                        <button
                            role="none"
                            className={cn(
                                "absolute bg-black/50 backdrop-blur-lg p-3 rounded-full text-white cursor-pointer active:scale-75 duration-700 z-50 transition-[opacity,visibility,transform]",
                                video.played ? "opacity-0 invisible" : "opacity-100 visible"
                            )}
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent event bubbling to the CarouselItem
                                togglePlay(e, video.src);
                            }}
                        >
                            {video.played ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
};

export default VideoSlider;
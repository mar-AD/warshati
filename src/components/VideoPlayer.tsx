"use client";

import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, VolumeX, Volume2, Maximize, Minimize, SkipForward, Settings } from "lucide-react";

export default function CustomVideoPlayer({
  url,
  placeholder,
  videoQualities,
}: {
  url: string;
  placeholder: string;
  videoQualities: { label: string; url: string }[];
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [selectedQuality, setSelectedQuality] = useState(videoQualities[0]?.url || url);
  const [selectedQualityLabel, setSelectedQualityLabel] = useState(videoQualities[0]?.label || "Auto");
  const [showQualityList, setShowQualityList] = useState(false);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (playing) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setPlaying(!playing);
      setShowControls(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !muted;
      setMuted(newMutedState);
      videoRef.current.muted = newMutedState;
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      videoRef.current.volume = newVolume;
      setMuted(newVolume === 0);
    }
  };

  const updateTime = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current && videoRef.current) {
      const progressBar = progressRef.current;
      const newTime = (e.nativeEvent.offsetX / progressBar.offsetWidth) * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const handleQualityChange = (quality: { label: string; url: string }) => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      setSelectedQuality(quality.url);
      setSelectedQualityLabel(quality.label);
      setShowQualityList(false);

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = currentTime;
          videoRef.current.play();
        }
      }, 100);
    }
  };

  const resetControlsTimeout = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    if (playing) {
      hideControlsTimeout.current = setTimeout(() => setShowControls(false), 3000);
    }
  };

  useEffect(() => {
    resetControlsTimeout();

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", updateTime);
    }
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      videoRef.current?.removeEventListener("timeupdate", updateTime);
    };
  }, [volume]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div
      className="relative w-full mx-auto bg-black group"
      onMouseMove={resetControlsTimeout}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => {
        if (playing) {
          hideControlsTimeout.current = setTimeout(() => setShowControls(false), 6000);
        }
      }}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={selectedQuality}
        className="w-full h-[100%] object-cover cursor-pointer"
        onClick={togglePlay}
        onDoubleClick={toggleFullscreen}
        muted={muted}
        poster={placeholder}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
  
      <div
        className="absolute inset-0 bg-transparent cursor-pointer"
        onClick={togglePlay}
      ></div>
  
      {showControls && (
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onClick={togglePlay}
        >
          {playing ? <Pause fill="white" size={48} className="text-white" /> : <Play fill="white" size={48} className="text-white" />}
        </div>
      )}
  
      <div
        className={`absolute bottom-0 left-0 w-full flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/50 to-transparent transition-opacity duration-500 ${
          showControls ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } z-20`}
        style={{ height: "60px" }}
      >

        <div
          ref={progressRef}
          className="relative h-1 w-full bg-gray-600 cursor-pointer"
          onClick={handleProgressClick}
        >
          <div className="absolute h-1 bg-violet-500" style={{ width: `${(currentTime / duration) * 100}%` }} />
        </div>
  

        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-3">
            <button onClick={togglePlay} className="text-white">
              {playing ? <Pause fill="white" size={24} /> : <Play fill="white" size={24} />}
            </button>
            <button><SkipForward fill="white" className="text-white w-6 h-6" /></button>
  

            <div
              className="relative flex items-center"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button onClick={toggleMute}>
                {muted ? <VolumeX fill="white" className="text-white w-6 h-6" /> : <Volume2 fill="white" className="text-white w-6 h-6" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className={`absolute left-1 w-24 cursor-pointer text-violet-700 ${
                  showVolumeSlider ? "opacity-100 relative" : "opacity-0"
                }`}
              />
            </div>
  
            <span className="text-white text-sm">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
  

          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setShowQualityList(!showQualityList)}
                className="relative flex items-center text-white"
              >
                <Settings className="w-6 h-6" />
                <span className="absolute -top-2 -right-3 bg-violet-600 text-white text-xs px-1 py-.5">
                  {selectedQualityLabel === "1080p" ? "HD" : ""}
                </span>
              </button>
  
              {showQualityList && (
                <div className="absolute bottom-10 right-0 bg-gray-800 text-white text-sm rounded-md shadow-lg overflow-hidden">
                  {videoQualities.map((quality, index) => (
                    <button
                      key={index}
                      className={`block w-full px-4 py-2 text-left hover:bg-gray-700 ${
                        selectedQualityLabel === quality.label ? "bg-violet-600" : ""
                      }`}
                      onClick={() => handleQualityChange(quality)}
                    >
                      {quality.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
  
            <button onClick={toggleFullscreen} className="text-white">
              {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

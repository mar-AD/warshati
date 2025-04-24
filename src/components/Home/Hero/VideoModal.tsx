"use client";
import { Play } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Modal from "react-modal";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const videoId = "2BINcU8N6P0";
  const t = useTranslations("home");
  // Proper initialization after component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      const appElement = document.getElementById("__next") || document.body;
      Modal.setAppElement(appElement);
    }
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="btn !font-Vazirmatn !border-none gap-x-2 text-sm sm:text-base md:text-lg min-w-fit !p-0"
      >
        <Play className="bg-violet-300 text-transparent fill-white p-1.5 md:p-2.5 size-7 md:size-9 rounded-full" />
        {/* Regarder la vidéo */}
        {t("video_button")}
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Video Modal"
      >
        <div className="relative w-full h-0 pb-[56.25%]">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 size-8 text-white bg-black/70 rounded-full"
          aria-label="Close video modal"
        >
          ✕
        </button>
      </Modal>

      <style jsx global>{`
        .modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: transparent;
          width: 90%;
          max-width: 900px;
          border: none;
          outline: none;
          padding: 0;
        }
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.75);
          z-index: 1000;
        }
      `}</style>
    </>
  );
};

export default VideoModal;

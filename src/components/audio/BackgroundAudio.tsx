import { useLayoutEffect, useRef } from "react";
import backgroundAudio from "@/assets/sounds/shubh_tts_audio.mp3";

const interactionEvents = ["click", "touchstart", "scroll", "keydown"] as const;

let sharedAudio: HTMLAudioElement | null = null;
let playbackStarted = false;
let playbackFinished = false;

const getBackgroundAudio = () => {
  if (!sharedAudio) {
    sharedAudio = new Audio(backgroundAudio);
    sharedAudio.autoplay = true;
    sharedAudio.loop = false;
    sharedAudio.muted = false;
    sharedAudio.volume = 0.1;
    sharedAudio.preload = "auto";
    sharedAudio.load();
    sharedAudio.addEventListener("ended", () => {
      playbackFinished = true;
    });
  }

  return sharedAudio;
};

export const BackgroundAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useLayoutEffect(() => {
    audioRef.current = getBackgroundAudio();

    const audio = audioRef.current;

    const removeInteractionListeners = () => {
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, playAfterInteraction);
      });
    };

    const startAudio = async () => {
      if (!audio || playbackStarted || playbackFinished) return true;

      try {
        await audio.play();
        playbackStarted = true;
        removeInteractionListeners();
        return true;
      } catch {
        return false;
      }
    };

    const playAfterInteraction = () => {
      void startAudio();
    };

    void startAudio().then((started) => {
      if (started) return;

      interactionEvents.forEach((eventName) => {
        window.addEventListener(eventName, playAfterInteraction, {
          passive: eventName !== "keydown",
        });
      });
    });

    return () => {
      removeInteractionListeners();
    };
  }, []);

  return null;
};

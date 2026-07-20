import { useEffect, useRef } from "react";
import backgroundAudio from "@/assets/sounds/Shirdi-Cab-Services.mp3";

const interactionEvents = ["click", "touchstart", "scroll", "keydown"] as const;

export const BackgroundAudio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (!audioRef.current) {
      const audio = new Audio(backgroundAudio);
      audio.loop = true;
      audio.volume = 0.4;
      audio.preload = "auto";
      audioRef.current = audio;
    }

    const audio = audioRef.current;

    const removeInteractionListeners = () => {
      interactionEvents.forEach((eventName) => {
        window.removeEventListener(eventName, playAfterInteraction);
      });
    };

    const startAudio = async () => {
      if (!audio || hasStartedRef.current) return true;

      try {
        await audio.play();
        hasStartedRef.current = true;
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
      audio.pause();
    };
  }, []);

  return null;
};

import { useRef } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  // we only start the music after user interaction
  const startMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play().catch(() => {});
  };

  // expose function so other components can start music
  (window as any).startAppMusic = startMusic;

  return (
    <audio
      ref={audioRef}
      src="/Assets/background_music.mpeg"
      loop
      playsInline
    />
  );
}
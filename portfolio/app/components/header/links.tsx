import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { useEffect, useRef, useState } from "react";

interface LinksProps {
  hide?: boolean;
}

const EMAIL = "salzmann2k@gmail.com";

export const Links = ({ hide = false }: LinksProps) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [hasCopiedMailToClipboard, setHasCopiedMailToClipboard] = useState(false);
  const audioRef = useRef<HTMLAudioElement>();

  const copyMailToClipboard = () => {
    navigator.clipboard.writeText(EMAIL);

    setHasCopiedMailToClipboard(true);
    const timeout = setTimeout(() => setHasCopiedMailToClipboard(false), 2000);

    return () => clearInterval(timeout);
  };

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/flow-211881.mp3");
      audioRef.current.volume = 0.25;
    }
    const audio = audioRef.current;
    if (isAudioPlaying) {
      audio.loop = true;
      audio.play();
    } else {
      audio.pause();
    }
  }, [isAudioPlaying]);

  return (
    <ul className={`flex items-center justify-end transition-opacity ${hide && "opacity-0"}`}>
      <button
        onClick={() => setIsAudioPlaying((p) => !p)}
        className={`material-symbols-rounded py-2 px-4 pl-0 ${
          isAudioPlaying ? "text-purple-500 animate-bounce" : "thin"
        }`}
      >
        music_note
      </button>
      <li>
        <a className="py-2 px-4" target="_blank" href="/cv-sandro-salzmann.pdf" rel="noreferrer">
          CV
        </a>
      </li>
      <li>
        <a
          className="py-2 px-4"
          target="_blank"
          href="https://github.com/sandro-salzmann"
          rel="noreferrer"
        >
          Github
        </a>
      </li>
      <li>
        <a
          className="py-2 px-4"
          target="_blank"
          href="https://www.linkedin.com/in/sandro-salzmann-94a581237/"
          rel="noreferrer"
        >
          Linkedin
        </a>
      </li>
      <li>
        <Popover className="py-2 px-4 pr-0">
          <PopoverButton>Contact</PopoverButton>
          <PopoverPanel
            transition
            anchor={{ to: "bottom", gap: 4 }}
            className="z-10 rounded-md transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0 backdrop-blur-lg bg-overlay/85"
          >
            <div className="p-4 max-w-2xl">
              <h3 className="font-semibold text-white text-lg">Email</h3>
              <p className="text-white/80 flex items-center gap-2">
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <button
                  onClick={copyMailToClipboard}
                  className={`material-symbols-rounded ${hasCopiedMailToClipboard && "text-green-600"}`}
                  aria-label="Copy mail to clipboard"
                >
                  {hasCopiedMailToClipboard ? "check_circle" : "content_copy"}
                </button>
              </p>
            </div>
          </PopoverPanel>
        </Popover>
      </li>
    </ul>
  );
};

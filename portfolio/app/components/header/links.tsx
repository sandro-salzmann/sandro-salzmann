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

  const links = (
    <>
      <a target="_blank" href="cv-sandro-salzmann.pdf" rel="noreferrer">
        CV
      </a>
      <a target="_blank" href="https://github.com/sandro-salzmann" rel="noreferrer">
        Github
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/sandro-salzmann-94a581237/"
        rel="noreferrer"
      >
        Linkedin
      </a>
      <Popover>
        <PopoverButton>Contact</PopoverButton>
        <PopoverPanel
          transition
          anchor={{ to: "bottom", gap: 4 }}
          className="pr-2 z-10 transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <div className="rounded-md backdrop-blur-lg bg-overlay/85 p-4 max-w-2xl">
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
    </>
  );

  return (
    <div
      className={`flex flex-wrap items-center gap-4 lg:gap-8 justify-end transition-opacity ${hide && "opacity-0"}`}
    >
      <button
        onClick={() => setIsAudioPlaying((p) => !p)}
        className={`material-symbols-rounded ${
          isAudioPlaying ? "text-purple-500 animate-bounce" : "thin"
        }`}
      >
        music_note
      </button>
      <span className="hidden lg:flex flex-wrap items-center gap-4 lg:gap-8">{links}</span>
      <Popover className="lg:hidden flex items-center">
        <PopoverButton className="material-symbols-rounded">link</PopoverButton>
        <PopoverPanel
          transition
          anchor={{ to: "bottom", gap: 4 }}
          className="pr-2 z-10 transition duration-200 ease-in-out data-[closed]:-translate-y-1 data-[closed]:opacity-0"
        >
          <div className="backdrop-blur-lg bg-overlay/85 rounded-xl text-white py-4 px-8 flex flex-col gap-4 justify-center items-center">
            {links}
          </div>
        </PopoverPanel>
      </Popover>
    </div>
  );
};

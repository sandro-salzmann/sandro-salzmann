import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

export const CreditsPopover = () => {
  return (
    <Popover>
      <PopoverButton className="link-blue font-semibold">
        <h1>Credits</h1>
      </PopoverButton>
      <PopoverPanel
        transition
        anchor={{ to: "bottom", gap: 4 }}
        className="z-10 divide-y divide-white/10 rounded-xl transition duration-200 ease-in-out data-[closed]:translate-y-1 data-[closed]:opacity-0 backdrop-blur-lg bg-overlay/85"
      >
        <div className="p-4 max-w-2xl">
          <h3 className="font-semibold text-white text-lg">Music</h3>
          <p className="text-white/80">
            Music by{" "}
            <a
              className="link-blue"
              href="https://pixabay.com/de/users/loksii-40853646/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=211881"
            >
              Oleksii Holubiev
            </a>{" "}
            from{" "}
            <a
              className="link-blue"
              href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=211881"
            >
              Pixabay
            </a>
          </p>
        </div>

        <div className="p-4 max-w-2xl">
          <h3 className="font-semibold text-white text-lg">Favicon</h3>
          <p className="text-white/80">
            This favicon was generated using the following graphics from Twitter Twemoji
            <ul>
              <ul>Graphics Title: 1f600.svg</ul>
              <li>
                Graphics Author:{" "}
                <a className="link-blue" href="https://github.com/twitter/twemoji">
                  Copyright 2020 Twitter, Inc and other contributors
                </a>
              </li>
              <li>
                Graphics Source:{" "}
                <a
                  className="link-blue"
                  href="https://github.com/twitter/twemoji/blob/master/assets/svg/1f600.svg"
                >
                  https://github.com/twitter/twemoji
                </a>
              </li>
              <li>
                Graphics License:{" "}
                <a className="link-blue" href="https://creativecommons.org/licenses/by/4.0/">
                  CC-BY 4.0
                </a>
              </li>
            </ul>
          </p>
        </div>
      </PopoverPanel>
    </Popover>
  );
};

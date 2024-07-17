import { NavLink } from "@remix-run/react";
import { useRef } from "react";
import { $path } from "remix-routes";
import { useOverflowsOnTop } from "../../utils/use-overflows-on-top";
import { TITLE } from "./../../root";
import { Links } from "./links";

export const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const isNavVisible = useOverflowsOnTop(navRef);
  const areLinksVisible = useOverflowsOnTop(navRef, 200);
  const isTitleVisible = useOverflowsOnTop(navRef, 100);

  return (
    <div
      ref={navRef}
      className={`sticky top-0 py-4 -my-4 backdrop-blur-xl w-full z-10 transition-colors ${isNavVisible && "bg-overlay/90"}`}
    >
      <div className="container flex space-x-2 justify-between items-center">
        <div className="flex space-x-4">
          {[
            {
              title: "Personal Projects",
              to: $path("/"),
              key: "personal-projects",
              icon: "code",
            },
            {
              title: "About me",
              to: $path("/about"),
              key: "about-me",
              icon: "person",
            },
          ].map(({ key, to, title, icon }) => (
            <div key={key} className="relative transition-transform">
              <NavLink key={key} to={to}>
                {({ isActive }) => (
                  <>
                    <div className="px-4 py-2 text-lg inline-flex gap-2 items-center border-2">
                      <span className="material-symbols-rounded">{icon}</span>
                      {title}
                    </div>
                    <div
                      className={`w-full h-full absolute top-0 left-0 transition-colors ${isActive && "blur-xl bg-purple-500/30"}`}
                    />
                  </>
                )}
              </NavLink>
            </div>
          ))}
        </div>
        <h2 className={`relative transition-opacity ${!isTitleVisible && "opacity-0"}`}>
          <h1 className="text-xl font-extrabold">{TITLE}</h1>
          <div className="w-full h-full absolute top-0 blur-md text-purple-300/70" aria-hidden>
            {TITLE}
          </div>
        </h2>
        <Links hide={!areLinksVisible} />
      </div>
    </div>
  );
};

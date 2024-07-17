import { Outlet } from "@remix-run/react";
import TypewriterComponent from "typewriter-effect";
import backgroundUrl from "../assets/background.svg";
import { CreditsPopover } from "../components/footer/credits-popover";
import { Links } from "../components/header/links";
import { Navigation } from "../components/header/navigation";
import { TITLE } from "../root";

export default function Layout() {
  return (
    <main
      className="w-dvw h-dvh bg-center bg-cover bg-black text-purple-50 overflow-y-auto space-y-8"
      style={{ backgroundImage: `url("${backgroundUrl}")` }}
    >
      <div className="container pt-4 lg:pt-8">
        <Links />
      </div>
      <div className="container relative">
        <h1 className="text-4xl lg:text-8xl font-extrabold">{TITLE}</h1>
        <h1
          className="text-4xl lg:text-8xl font-extrabold absolute top-0 blur-xl text-purple-300/80 pointer-events-none"
          aria-hidden
        >
          {TITLE}
        </h1>
      </div>
      <h2 className="container text-3xl font-semibold">
        <TypewriterComponent
          options={{
            loop: true,
            delay: 50,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("I build cool things on the web!")
              .pauseFor(1000)
              .deleteChars(23)
              .typeString("pretty")
              .pauseFor(1000)
              .deleteChars(6)
              .typeString("usable webapps and websites.")
              .pauseFor(1000)
              .deleteChars(18)
              .typeString("things! 🚀")
              .pauseFor(5000)
              .start();
          }}
        />
      </h2>
      <Navigation />
      <Outlet />
      <footer className="container py-8 text-center">
        <CreditsPopover />
      </footer>
    </main>
  );
}

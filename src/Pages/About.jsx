"use client";

import Heading from "../Components/Heading.jsx";
import Marquee from "../Components/About/Marquee.jsx";
import ScrollDownIndicator from "../Components/About/ScrollDownIndicator.jsx";
import ColorText from "../Components/About/ColorText.jsx";
import Paragraph from "../Components/About/Paragraph.jsx";

const hi = ["Shalom!", "Hi!", "Hola!", "Pryvit!"];
const text =
  "I'm JT, thanks for visiting! I'm a full stack web developer based in Calgary, Canada.  I love using the TALL stack (Tailwind, Alpine, Laravel & Livewire) to build everything from small one-pagers to fully functional web applications.";

export default function About() {
  return (
    <main>
      <div className="h-[75vh] md:h-[85vh] flex flex-col justify-between items-center">
        <Heading title="JT Smith" />

        <Marquee values={hi} />

        <ScrollDownIndicator />
      </div>

      <article className="w-2/3 mx-auto md:w-1/2">
        <div className="flex flex-col justify-center space-y-4 text-zinc-300">
          <Paragraph text={text} />

          <ColorText />

          <p className="flex justify-center pb-8 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-zinc-200/50 to-zinc-200 font-heading">
            This space intentionally left blank.
          </p>
          <p className="h-1"></p>
        </div>
      </article>
    </main>
  );
}

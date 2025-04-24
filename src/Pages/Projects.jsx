import Heading from "../Components/Heading";
import { ColorSwapper } from "../Components/UI/ColorSwapper";
import ProjectData from "../Data/Projects";
import { twMerge } from "tailwind-merge";

export default function Projects() {
  const projects = ProjectData.map((project) => {
    return (
      <ColorSwapper.Block activeClass={project.bgColor} key={project.name}>
        <div
          className={twMerge(
            "flex flex-col justify-center px-16 py-16 mb-16 space-y-8 lg:py-24 min-h-96 rounded-xl text-zinc-200 ",
            project.bgColor,
            project.fontColor ?? "text-zinc-200",
          )}
        >
          <a
            href={project.href}
            target="_blank"
            className="flex items-center flex-col sm:flex-row text-md sm:text-3xl font-extrabold group hover:cursor-pointer md:text-4xl lg:text-5xl bg-gradient-to-b from-white/50 to-white bg-clip-text text-transparent"
          >
            <img
              src={project.logoUri}
              className={project.imageClassNames}
              alt={project.name + " logo"}
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={twMerge(
                  "hidden w-6 h-6 group-hover:block transition group-hover:animate-pulse text-white mr-4",
                  project.linkColor,
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                />
              </svg>
            </span>
          </a>
          <div className="text-lg font-medium [text-wrap:balance] md:text-xl lg:text-2xl font-heading">
            {project.description}
          </div>
        </div>
      </ColorSwapper.Block>
    );
  });

  return (
    <div>
      <Heading title="Projects" />

      <article className="w-2/3 mx-auto md:w-1/2">
        <ColorSwapper>
          <ColorSwapper.Portal />

          <ColorSwapper.Group className="relative">
            <ColorSwapper.Block activeClass="w-full">
              <div className="flex px-8 pb-16 text-xl text-center text-zinc-300 rounded-xl [text-wrap:balance] min-h-[75vh]">
                Below you'll find the projects I'm most proud to have worked on.
                I've poured many, many hours of my life into these, and I hope
                they've made the world a little bit better of a place.
              </div>
            </ColorSwapper.Block>

            {projects}

            <ColorSwapper.Block activeClass="bg-neutral-800">
              <div className="h-[50vh]"></div>
            </ColorSwapper.Block>
          </ColorSwapper.Group>
        </ColorSwapper>
      </article>
    </div>
  );
}

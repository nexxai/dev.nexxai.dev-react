import Project from "./Project";
import ProjectData from "../../Data/Projects";

export default function Projects() {
  const projects = ProjectData.map((project) => {
    return (
      <Project
        name={project.name}
        href={project.href}
        description={project.description}
        techstack={project.techstack}
        integrations={project.integrations}
      />
    );
  });

  return (
    <div className="mt-8 text-zinc-300 group pagebreak">
      <div className="relative mb-2 text-2xl font-semibold font-heading">
        <div className="absolute bottom-0 h-2 px-2 -ml-2 text-transparent transition opacity-60 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 group-hover:transition group-hover:opacity-100 rotate-1">
          Projects
        </div>
        <div className="absolute z-20 text-transparent print:text-black bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400">
          Projects
        </div>
        <div className="relative z-20 text-transparent">Projects</div>
      </div>

      <div className="space-y-4 print:text-sm print:text-black">{projects}</div>
    </div>
  );
}

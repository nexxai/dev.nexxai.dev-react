import Project from "./Project";
import ProjectData from "../../Data/Projects";
import SectionTitle from "./SectionTitle";

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
            <SectionTitle
                title="Projects"
                fromColor="from-green-300"
                viaColor="via-blue-500"
                toColor="to-purple-600"
            />

            <div className="space-y-4 print:text-sm print:text-black">{projects}</div>
        </div>
    );
}

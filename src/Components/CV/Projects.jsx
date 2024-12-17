import Project from "./Project";

export default function Projects() {
  return (
    <div className="mt-8 text-zinc-300 group ">
      <div className="relative mb-2 text-2xl font-semibold font-heading">
        <div className="absolute bottom-0 h-2 px-2 -ml-2 text-transparent transition opacity-60 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 group-hover:transition group-hover:opacity-100 rotate-1">
          Projects
        </div>
        <div className="absolute z-20 text-transparent print:text-black bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400">
          Projects
        </div>
        <div className="relative z-20 text-transparent">Projects</div>
      </div>

      <div className="space-y-4 print:text-sm print:text-black">
        <Project
          name="Flashbook"
          href="https://flashbook.co"
          description="Flashbook is a site for tattoo artists to share their portfolio and for tattoo clients to find their next artist."
          techstack="Laravel, React, Inertia, TailwindCSS, MySQL"
        />

        <Project
          className="print:pt-12"
          name="StubSquad"
          href="https://stubsquad.com"
          description="StubSquad is a SaaS product allowing sports season ticket groups to draft the games they want most."
          techstack="Laravel, Livewire, TailwindCSS, MySQL"
          integrations="Various JSON APIs for league, team, and schedule ingestion"
        />

        <Project
          name="Fitcheck"
          href="https://fitcheck.co"
          description="Have the community decide what you're going to wear out."
          techstack="Laravel, React, Inertia, TailwindCSS, MySQL"
        />

        <Project
          name="Fortuna Vista"
          href="https://fortunavista.com"
          description="A fully custom homemade photography portfolio and online shop, for displaying my photos and selling prints."
          techstack="Laravel, Vue, MySQL"
          integrations="PayPal Checkout"
        />
      </div>
    </div>
  );
}

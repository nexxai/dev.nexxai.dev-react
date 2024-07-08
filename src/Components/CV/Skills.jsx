export default function Skills() {
  return (
    <div className="mt-8 text-zinc-300 group">
      <div className="relative mb-2 text-2xl font-semibold font-heading">
        <div className="absolute bottom-0 h-2 px-2 -ml-2 text-transparent transition opacity-60 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 group-hover:transition group-hover:opacity-100 rotate-1">
          Skills
        </div>
        <div className="absolute z-20 text-transparent print:text-black bg-clip-text bg-gradient-to-b from-zinc-100 to-zinc-400">
          Skills
        </div>
        <div className="relative z-20 text-transparent">Skills</div>
      </div>

      <div className="space-y-4 print:text-sm print:text-black">
        <div>
          <ul>
            <li>
              <span className="font-semibold text-zinc-100 print:text-black mr-2">
                Languages:
              </span>
              PHP, JavaScript, HTML, CSS, JSON, YAML, TOML, SQL, Ruby
            </li>
            <li>
              <span className="font-semibold mr-2 text-zinc-100 print:text-black">
                Frameworks / Libraries:
              </span>
              Laravel, TailwindCSS, Inertia, React, Livewire, Framer Motion,
              Vue, Vite, Rails, Websockets, Express, Node, jQuery
            </li>
            <li>
              <span className="font-semibold mr-2 text-zinc-100 print:text-black">
                Testing / Static Analysis:
              </span>
              Pest, PHPUnit, PHPstan, SonarQube / SonarCloud, Rspec, Cypress,
              Jest, Mocha, Chai
            </li>
            <li>
              <span className="font-semibold mr-2 text-zinc-100 print:text-black">
                Databases:
              </span>
              MySQL / MariaDB, PostgreSQL, Redis
            </li>
            <li>
              <span className="font-semibold mr-2 text-zinc-100 print:text-black">
                CI/CD:
              </span>
              GitHub Actions, Azure DevOps / Azure Pipelines, Terraform, Gitlab
              CI, Cloudflare, Postman
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

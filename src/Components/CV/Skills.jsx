import SectionTitle from "./SectionTitle";

export default function Skills() {
    return (
        <div className="mt-8 text-zinc-300 group">
            <SectionTitle
                title="Skills"
                fromColor="from-pink-500"
                viaColor="via-red-500"
                toColor="to-yellow-500"
            />

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
                            Pest, PHPUnit, PHPstan, SonarQube / SonarCloud, Rspec, Playwright,
                            Cypress, Jest, Mocha, Chai
                        </li>
                        <li>
                            <span className="font-semibold mr-2 text-zinc-100 print:text-black">
                                Databases:
                            </span>
                            MySQL / MariaDB, Sqlite, PostgreSQL, Redis
                        </li>
                        <li>
                            <span className="font-semibold mr-2 text-zinc-100 print:text-black">
                                CI/CD:
                            </span>
                            GitHub Actions, Azure DevOps / Azure Pipelines, Terraform, Gitlab
                            CI, Cloudflare, Postman
                        </li>
                        <li>
                            <span className="font-semibold mr-2 text-zinc-100 print:text-black">
                                Clouds:
                            </span>
                            AWS (previously certified), Azure (previously certified), Google
                            Cloud, Oracle Cloud, Alibaba Cloud, DigitalOcean, Vercel, Netlify
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

import Company from "./Company";
import SectionTitle from "./SectionTitle";
export default function Employment() {
    return (
        <div className="mt-8 text-zinc-300 group">
            <SectionTitle
                title="Employment"
                fromColor="from-blue-400"
                toColor="to-blue-600"
            />

            <div className="space-y-6 print:text-sm print:text-black">
                <Company
                    name="lululemon athletica"
                    duration="Apr 2022 - current"
                    title="Senior Architect"
                    industry="Retail"
                    keyDeliverable="Designed and architected multi-cloud native, private DNS architecture, enabling communication between all workloads across the entire business"
                    responsibilities={[
                        "Mentored junior, intermediate, and senior cloud engineers on best practices",
                        "Provided guidance and assistance to teammates as they built a library of Terraform modules for infrastructure automation",
                    ]}
                />

                <Company
                    name="Swoop Airlines"
                    duration="Oct 2021 - Mar 2022"
                    title="Head of Technology / Enterprise Architect"
                    industry="Travel / leisure"
                    keyDeliverable="Assumed responsibility for and delivered JSON API to validate and accept COVID passport (SMART Health Card) within the flight booking system (Navitaire), allowing vaccinated travelers to enter Canada"
                    responsibilities={[
                        "Wrote PowerShell scripts to automate the generation of APPR reports as required by the airline",
                        "Oversaw all developer, infrastructure and business intelligence teams",
                        "Reported directly to senior leadership, ensuring all development goals were on track, and infrastructure was available and ready for the business",
                    ]}
                />

                <Company
                    name="Symend"
                    duration="July 2020 - Sept 2021"
                    title="Manager of DevOps, Services and Operations"
                    industry="Fintech"
                    keyDeliverable="Built entire corporate library of Terraform modules and streamlined CI/CD process, reducing development TTROI from weeks to minutes"
                    responsibilities={[
                        "Wrote the company's entire Terraform library of modules from scratch",
                        "Built all customer deployment pipelines in Azure DevOps/YAML and PowerShell",
                        "Created the team from the ground up, encouraging an open communication style and blameless feedback",
                        "Responsible for 5 junior and intermediate DevOps engineers",
                    ]}
                />

                <Company
                    name="Swoop Airlines"
                    duration="Nov 2018 - Mar 2020"
                    title="Solution Architect / Senior Cloud Engineer"
                    industry="Travel / leisure"
                    keyDeliverable="Architected and guided development of Apple Pass boarding pass integration with booking system"
                    responsibilities={[
                        "Introduced Terraform to the team; built module library from scratch",
                        "Architected and implemented multi-region web services",
                        "Built 'attack dashboard' to visualize incoming network attacks in near-real time using data from our CDN partner, Google BigQuery + Google Maps",
                        "Maintained and supported the metapartner API Gateway",
                        "Mentored intermediate and junior teammates, and provided guidance on cloud best practices to all technical teams",
                    ]}
                />
            </div>
        </div>
    );
}

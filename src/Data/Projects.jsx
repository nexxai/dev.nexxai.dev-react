const projects = [
  {
    name: "IPMS Winnipeg",
    href: "https://ipmswinnipeg.ca",
    description:
      "IPMS Winnipeg needed a full website redesign and a custom CMS to communicate important meeting information to their membership and administer their quarterly contests",
    techstack: "Laravel, FilamentPHP, React, Inertia, TailwindCSS, Sqlite3",
    integrations:
      "AWS S3 for contest entry photos and automatic database backups",
    logoUri: "/images/ipms.png",
    imageClassNames: "h-16 lg:h-24 mr-4",
    bgColor: "bg-sky-700",
  },
  {
    name: "Flashbook",
    href: "https://flashbook.co",
    description:
      "Flashbook is the most popular destination for tattoo artists to share their portfolio and for tattoo clients to find their next artist.",
    techstack: "Laravel, React, Inertia, TailwindCSS, MySQL",
    logoUri: "/images/flashbook.png",
    imageClassNames: "w-2/3",
    bgColor: "bg-neutral-900",
  },
  {
    name: "StubSquad",
    href: "https://stubsquad.com",
    description:
      "StubSquad is a SaaS platform allowing sports season ticket groups to draft the games they want most.",
    techstack: "Laravel, Livewire, TailwindCSS, MySQL",
    integrations: "Various JSON APIs for league, team, and schedule ingestion",
    logoUri: "/images/stubsquad.svg",
    imageClassNames: "w-2/3 text-white mr-4",
    bgColor: "bg-purple-800",
  },
  {
    name: "Fortuna Vista",
    href: "https://fortunavista.com",
    description:
      "A fully custom photography portfolio platform I built to display my photos and sell prints.",
    techstack: "Laravel, Vue, MySQL",
    integrations: "PayPal Checkout",
    logoUri: "/images/fortuna-vista.png",
    imageClassNames: "w-2/3 max-w-[250px] mr-4",
    bgColor: "bg-white",
    fontColor: "text-black",
    linkColor: "text-black",
  },
];

export default projects;

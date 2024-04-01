import PropTypes from "prop-types";

Project.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  techstack: PropTypes.string.isRequired,
  integrations: PropTypes.string,
};
export default function Project({
  name,
  href,
  description,
  techstack,
  integrations,
}) {
  return (
    <div>
      <div className="flex justify-between mb-1 font-sans text-xl">
        <h4 className="font-semibold group">
          <a
            href={href}
            className="flex items-center space-x-2"
            target="_blank"
          >
            <span className="block print:text-black">{name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 print:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </a>
        </h4>
      </div>
      <div>
        <ul>
          <li>{description}</li>
          <li>Tech stack: {techstack}</li>
          {integrations && <li>Integrations: {integrations}</li>}
        </ul>
      </div>
    </div>
  );
}

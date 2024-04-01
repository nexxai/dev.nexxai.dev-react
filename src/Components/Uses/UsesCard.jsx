import PropTypes from "prop-types";
import { SpotlightCard } from "../UI/SpotlightCard";
import clsx from "clsx";

UsesCard.propTypes = {
  left: PropTypes.object.isRequired,
  right: PropTypes.object.isRequired,
  size: PropTypes.number,
};

export default function UsesCard({ left, right, size }) {
  console.log(left);
  return (
    <SpotlightCard
      from="#1cd1c6"
      via="#407cff"
      size={size}
      className="w-full max-w-2xl bg-white/10 p-8 [--radius:theme(borderRadius.2xl)]"
    >
      <div className="absolute bottom-0 left-0 right-0 inset-y-px bg-zinc-800"></div>

      <div className="relative justify-between space-y-8 lg:space-y-0 lg:flex text-zinc-200">
        <div>
          <h2 className="flex items-center text-3xl font-semibold font-heading">
            <span className="mr-2">{left.name}</span>
          </h2>
          <ul>
            {left.data.map((data) => {
              return (
                <li
                  className="flex items-center space-x-2 group"
                  key={data.name}
                >
                  <a
                    target="_blank"
                    href={data.link}
                    className={clsx(
                      data.color,
                      `text-xl font-medium transition hover:text-white text-zinc-400 hover:font-heading`,
                    )}
                  >
                    {data.name}
                  </a>
                  <div className="hidden -rotate-90 group-hover:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 animate-bounce text-zinc-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="lg:text-right">
          <h2 className="flex items-center justify-end text-3xl font-semibold font-heading">
            <span className="mr-2 lg:ml-2 lg:mr-0">{right.name}</span>
          </h2>
          <ul>
            {right.data.map((data) => {
              return (
                <li
                  className="flex items-center justify-end group"
                  key={data.name}
                >
                  <div className="hidden rotate-90 lg:group-hover:block group-hover:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 animate-bounce text-zinc-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <a
                    target="_blank"
                    href={data.link}
                    className={clsx(
                      data.color,
                      `mr-2 text-xl font-medium transition hover:text-white text-zinc-400 hover:font-heading lg:ml-2 lg:mr-0`,
                    )}
                  >
                    {data.name}
                  </a>
                  <div className="hidden -rotate-90 lg:group-hover:hidden group-hover:block">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4 animate-bounce text-zinc-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M20.03 4.72a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 11.69l6.97-6.97a.75.75 0 011.06 0zm0 6a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 111.06-1.06L12 17.69l6.97-6.97a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </SpotlightCard>
  );
}

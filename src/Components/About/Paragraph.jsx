import clsx from "clsx";
import { TextReveal } from "../UI/TextReveal.jsx";
import PropTypes from "prop-types";

Paragraph.propTypes = {
  text: PropTypes.string,
};

export default function Paragraph({ text }) {
  return (
    <TextReveal
      body={text}
      className="relative mx-auto h-[200vh] w-full max-w-4xl"
    >
      {(tokens) => (
        <div className="sticky top-0 left-0 flex items-center text-3xl font-medium leading-tight text-zinc-200 lg:text-4xl h-1/2">
          <div>
            {tokens.map((token, index) => (
              <TextReveal.Token key={index} index={index}>
                {(isActive) => (
                  <span
                    className={clsx(
                      {
                        "opacity-10": !isActive,
                      },
                      "transition",
                    )}
                  >
                    {token}
                  </span>
                )}
              </TextReveal.Token>
            ))}
          </div>
        </div>
      )}
    </TextReveal>
  );
}

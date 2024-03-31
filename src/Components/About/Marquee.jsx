import PropTypes from "prop-types";
import { motion } from "framer-motion";
Marquee.propTypes = {
  values: PropTypes.array.isRequired,
};

export default function Marquee({ values }) {
  const showEachValueInSeconds = 5;
  return (
    <div className="relative flex w-full overflow-hidden py-5 ">
      <motion.div
        animate={{
          x: ["25%", "-75%"],
          transition: {
            duration: showEachValueInSeconds * values.length,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="flex w-[450vw] justify-between"
      >
        {values.map((greeting) => {
          return (
            <motion.div
              key={greeting}
              className="w-[150vw] flex justify-between"
              initial={{ opacity: 0 }}
              // Only apply the transition while this specific div is in the viewport
              whileInView={{
                // Each div should transition from not visible to visible to not visible again
                opacity: [0, 1, 0],
                transition: {
                  duration: showEachValueInSeconds,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="pb-4 text-4xl font-semibold font-heading text-zinc-300">
                {greeting}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

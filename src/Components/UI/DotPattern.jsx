import { useId } from "react";
import PropTypes from "prop-types";

DotPattern.propTypes = {
  size: PropTypes.number,
  radius: PropTypes.number,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  className: PropTypes.string,
};

export function DotPattern({
  size = 16,
  radius = 1,
  offsetX = 0,
  offsetY = 0,
  className,
}) {
  const id = useId();

  return (
    <svg className={className}>
      <defs>
        <pattern
          id={id}
          width={size}
          height={size}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={offsetX}
          y={offsetY}
        >
          <circle cx={size / 2} cy={size / 2} r={radius}></circle>
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        strokeWidth="0"
        fill={`url(#${id})`}
      ></rect>
    </svg>
  );
}

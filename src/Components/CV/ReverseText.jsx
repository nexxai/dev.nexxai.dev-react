import PropTypes from "prop-types";

ReverseText.propTypes = {
  value: PropTypes.string,
};

export default function ReverseText({ value }) {
  const reversedValue = value.split("").reverse().join("");

  return <span className="notObviousClassName">{reversedValue}</span>;
}

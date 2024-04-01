import PropTypes from "prop-types";

Company.propTypes = {
  name: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  industry: PropTypes.string.isRequired,
  keyDeliverable: PropTypes.string.isRequired,
  responsibilities: PropTypes.array.isRequired,
};

export default function Company({
  name,
  duration,
  title,
  industry,
  keyDeliverable,
  responsibilities,
}) {
  return (
    <div>
      <div className="flex justify-between mb-1 font-sans text-xl">
        <h4 className="font-semibold">{name}</h4>
        <span className="block">{duration}</span>
      </div>
      <div className="flex justify-between">
        <h5 className="text-lg">{title}</h5>
        <span className="block">Industry: {industry}</span>
      </div>
      <p className="mt-1 mb-1 font-semibold tracking-wide text-white print:text-black">
        Key Deliverable: {keyDeliverable}
      </p>
      <div>
        <span className="font-semibold">Other responsibilities</span>
        <ul className="list-disc">
          {responsibilities.map((resp) => (
            <li key={resp}>{resp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

import PropTypes from "prop-types";

const Label = function Label({ text }) {
  return <span className="text-secondary text-[14px] font-medium">{text}</span>;
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Label;

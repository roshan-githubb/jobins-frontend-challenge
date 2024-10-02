import PropTypes from "prop-types";
import { useId } from "react";

const Dropdown = ({ className = "", label = "", options = [], onClick = () => null }) => {
  const useID = useId();
  console.log("Options---dropdown",options)
  return (
    <>
    <button id="dropdownDefaultButton" data-dropdown-toggle={useID} className={`${className} flex items-center border-0 focus:ring-blue-primary focus:border-blue-primary`} type="button">
      <p className="truncate w-full overflow-hidden tracking-wide">{label}</p>
      <svg className="w-2.5 h-2.5 ms-[6px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
      </svg>
    </button>
    <div id={useID} className="z-10 hidden bg-white divide-y divide-tertiary rounded-lg shadow w-44">
      <ul className="py-2 text-sm text-primary" aria-labelledby="dropdownDefaultButton">
        {options?.map((_option, _i) => (
          <li key={_i} onClick={() => onClick(_option?.slug)}>
            <span className="block px-4 py-2 hover:bg-tertiary">{_option?.label}</span>
          </li>
        ))}
      </ul>
    </div>
  </>
  );
};

Dropdown.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string })).isRequired,
  onClick: PropTypes.func,
};

export default Dropdown;


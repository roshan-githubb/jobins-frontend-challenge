import PropTypes from "prop-types";
import ChevDownPng from '@assets/png/chevron-down.png';
import ChevUpPng from '@assets/png/chevron-up.png';

const CountryCardEach = function CountryCardEach({ icon, title, marginAmount, percentage, isProfit }) {
  return (
    <div className="flex justify-between items-center gap-4 flex-wrap sm:flex-nowrap">
      <div className="flex items-center gap-2 w-[225px]">
        <img src={icon} alt={`${title} icon`} className="w-[34px] h-[34px]" /> 
        <div>
          <p className="font-semibold text-[15px] text-[rgba(75, 70, 92, 1)]">{marginAmount}</p>
          <p className="text-[13px] text-secondary">{title}</p>
        </div>
      </div>
      <div className="bg-gray-200 rounded-full h-[6px] w-[95%]">
        <div className="bg-blue-dark h-[6px] rounded-full" style={{ width: percentage }}></div>
      </div>
      <div className="flex gap-1 w-[120px]">
        <img src={isProfit ? ChevUpPng : ChevDownPng} alt="Profit Indicator" />
        <span className={`${isProfit ? "text-green-primary" : "text-red-primary"} font-semibold text-[15px]`}>{percentage}</span>
      </div>
    </div>
  );
};

CountryCardEach.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  marginAmount: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
  isProfit: PropTypes.bool.isRequired,
};

export default CountryCardEach;

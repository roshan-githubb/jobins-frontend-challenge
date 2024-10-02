import australiaPng from '@assets/png/australia.png';
import brazilPng from '@assets/png/brazil.png';
import usaPng from '@assets/png/usa.png';
import CountryCardEach from "./CountryCardEach";

const CountryCard = function TotalSalesCard() {
  const _countryInfosUSA = {
    icon: usaPng,
    title: "United States",
    marginAmount: "30k",
    percentage: "25.8%",
    isProfit: true,
  };
  const _countryInfosBra = {
    icon: brazilPng,
    title: "Brazil",
    marginAmount: "26k",
    percentage: "16.2%",
    isProfit: false,
  };
  const _countryInfosAUS = {
    icon: australiaPng,
    title: "Australia",
    marginAmount: "17k",
    percentage: "11.9%",
    isProfit: false,
  };

  return (
    <div className="card col-span-1 md:col-span-4 dashboard-card-wrapper mt-4 md:mt-4 lg:mt-0">
      <ul className="space-y-[18px]">
        <li>
          <CountryCardEach {..._countryInfosUSA} />
        </li>
        <li>
          <CountryCardEach {..._countryInfosBra} />
        </li>
        <li>
          <CountryCardEach {..._countryInfosAUS} />
        </li>
      </ul>
    </div>
  );
};

export default CountryCard;

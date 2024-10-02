import SalesCard from "./SalesCard";
import ProfitCard from "./ProfitCard";
import CountryCard from "./CountryCard";

const Cards = function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 lg:gap-[18px] dashboard-content-anims">
      <SalesCard />
      <ProfitCard />
      <CountryCard />
    </div>
  );
};

Cards.propTypes = {};

export default Cards;

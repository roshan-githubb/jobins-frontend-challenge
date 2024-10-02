import ArrowUpPng from "@assets/png/arrow-up.png";
import SalesStatPng from "@assets/png/sales.png";
import Label from "./Label";

const SalesCard = () => {
  const _total_sales = "350K";
  const _stats = "8.56K";
  return (
    <div className="card col-span-1 lg:col-span-3 dashboard-card-wrapper me-0 md:me-4 lg:me-0">
      <div className="flex flex-wrap md:flex-nowrap items-center justify-evenly gap-2 md:gap-10 ">
        <img src={SalesStatPng} className="md:h-[64px] lg:h-[73px] md:w-[64px] lg:w-[73px]" />
        <div className="border-r-0 sm:border-r border-borderColor h-[150px]" />
        <div>
          <h4 className="font-semibold text-md lg:text-lg">Total Sales & Costs</h4>
          <h4 className="text-secondary text-[14px] font-medium mt-1">Last 7 days</h4>
          <div className="mt-[30px] ">
            <h4 className="text-xl lg:text-xxl font-bold">${_total_sales}</h4>
            <div className="mt-3 flex flex-wrap gap-2 items-center">
              <span className="text-green-primary inline-flex items-center justify-center gap-1 text-[14px] font-medium">
                <img src={ArrowUpPng} width={16} height={16} /> {_stats}
              </span>
              <Label text="vs last 7 days" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;

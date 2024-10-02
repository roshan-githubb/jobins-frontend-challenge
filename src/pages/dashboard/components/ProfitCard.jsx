import Label from "./Label";
import ArrowUpPng from '@assets/png/arrow-up.png';
import YenPng from '@assets/png/yen.png';

const ProfitCard = () => {
  const _total_profit = "50K";
  const _stats = "12%";
  const text="vs last 7 days"
  return (
    <div className="card col-span-1 lg:col-span-2 dashboard-card-wrapper mt-4 md:mt-0 lg:mt-0">
      <div className="flex gap-[22px] pb-100px">
        <img src={YenPng} className="h-[43px] w-[43px]" />
        <div>
          <h4 className="font-semibold text-lg">Total Profit</h4>
          <h4 className="text-secondary text-[14px] font-medium mt-1">Last 7 days</h4>
          
        </div>
      </div>
      <div className="mt-[30px]">
        <h4 className="text-xl lg:text-xxl font-bold">{_total_profit}</h4>
        <div className="mt-3 flex flex-wrap lg:flex-nowrap gap-2 items-center">
          <span className="text-green-primary inline-flex items-center justify-center gap-1 text-[14px] font-medium">
            <img src={ArrowUpPng} width={16} height={16} /> {_stats}
          </span>
          <Label text= {text}/>
        </div>
      </div>
    </div>
  );
};

export default ProfitCard;

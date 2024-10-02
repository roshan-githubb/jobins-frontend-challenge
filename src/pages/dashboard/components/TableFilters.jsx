import { _filterDateRangeOptions, _filterStatusOptions } from "../../../pages/dashboard/constants";
import Input from "../../../shared/Input";
import Dropdown from "../../../shared/Dropdown";

const TableFilters = function TableFilters() {
  console.log("filteropts",_filterStatusOptions)
  return (
    <div className="flex flex-wrap md:flex-no-wrap gap-[14px] justify-between mt-4">
      <div className="flex flex-wrap gap-[14px]">
        <Dropdown className="text-nowrap h-[40px] border px-4 py-2 text-secondary rounded-sm text-[15px] gap-[6px] bg-white w-full sm:w-auto" label={`Status: All`} options={_filterStatusOptions} />
        <div>
          <Input inputClassName="h-[40px] px-4 py-2 border-none rounded-sm sm:w-[200px] placeholder-secondary placeholder:font-normal placeholder:text-[14px] placeholder-opacity-0" placeHolder="Search..." />
        </div>
      </div>
      <Dropdown className="h-[40px] border px-4 py-2 text-secondary rounded-sm text-[15px] gap-[6px] bg-white w-full sm:w-auto" label={`Filter by date range`} options={_filterDateRangeOptions} />
    </div>
  );
};

TableFilters.propTypes = {};

export default TableFilters;

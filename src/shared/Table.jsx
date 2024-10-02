import PropTypes from "prop-types";
import Dropdown from "./Dropdown";
import ChevronLeftIcon from "@assets/png/chevron-left.png";
import ChevronRightIcon from "@assets/png/chevron-right.png";


const Table = function Table({ headers = [], children, filters = {}, setFilters = () => null }) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-secondary">
          <thead className=" text-secondary uppercase border-b text-[13px]">
            <tr>
              {headers?.map((_header, _i) => (
                <th key={_i} scope="col" className="px-5 py-4 font-normal text-nowrap">
                  {_header?.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
        <Pagination {...filters} setFilters={setFilters} />
      </div>
    </>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string })),
  children: PropTypes.node,
  processing: PropTypes.bool,
  filters: PropTypes.object,
  setFilters: PropTypes.func,
};

export default Table;

const Pagination = function Pagination({ limit, page, total, setFilters }) {
  const _filterDateRangeOptions = [
    {
      label: "10",
      slug: "10",
    },
    {
      label: "30",
      slug: "30",
    },
    {
      label: "50",
      slug: "50",
    },
  ];
  const onPrevNextClick = (_i) => {
    if (_i >= 1 && _i <= 3) {
      setFilters((pre) => ({ ...pre, page: _i }));
    }
  };
  return (
    <nav className={`${total > 0 ? "flex" : "hidden"} items-center flex-column flex-wrap md:flex-row justify-between px-5 py-4 `} aria-label="Table navigation">
      <span className="text-[15px] font-normal text-gray-light mb-4 md:mb-0 w-full md:w-auto flex items-center">
        Showing{" "}
        <span className="font-semibold text-primary mx-2 border rounded-sm">
          <Dropdown className=" px-3 py-1 rounded-sm text-[15px] gap-[6px] bg-white" label={limit} options={_filterDateRangeOptions} onClick={(e) => setFilters((pre) => ({ ...pre, limit: e }))} />
        </span>{" "}
        of 50
      </span>
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-[13px] h-9 gap-[2px]">
        <li className="cursor-pointer" onClick={() => onPrevNextClick(page - 1)}>
          <span className="bg-tertiary rounded-[4px] flex items-center justify-center py-1 px-2 h-9 w-9 ms-0 leading-tight text-secondary rounded-s-sm  hover:text-blue-dark">
            <img src={ChevronLeftIcon} />
          </span>
        </li>
        {[...new Array(3)].map((_page, _i) => (
          <li className="cursor-pointer" key={_i} onClick={() => setFilters((pre) => ({ ...pre, page: _i + 1 }))}>
            <span className={`rounded-[4px] flex items-center justify-center py-1 px-2 h-9 w-9 leading-tight ${page === _i + 1 ? "bg-blue-dark  text-white" : "bg-tertiary text-secondary hover:text-blue-dark"}`}>{_i + 1}</span>
          </li>
        ))}

        <li className="cursor-pointer" onClick={() => onPrevNextClick(page + 1)}>
          <span className="bg-tertiary rounded-[4px] flex items-center justify-center py-1 px-2 h-9 w-9 leading-tight text-secondary  rounded-e-sm hover:bg-gray-100 hover:text-blue-dark">
            <img src={ChevronRightIcon} />
          </span>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  limit: PropTypes.number,
  page: PropTypes.number,
  total: PropTypes.number,
  setFilters: PropTypes.func,
};

export const TableColumn = function TableColumn({ value }) {
  return <td className="px-5 py-4">{value}</td>;
};

TableColumn.propTypes = {
  value: PropTypes.any, 
};

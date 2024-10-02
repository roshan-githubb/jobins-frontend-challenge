import { useContext } from "react";
import { DashboardContext } from "../Store/Store";

const OrdersNav = function OrdersNav() {
  const { _orderMenus } = useContext(DashboardContext);
  return (
    <nav className="mt-6 flex flex-wrap md:flex-nowrap md:mt-2">
      {_orderMenus?.map(({ active, label, onClick }, _index) => (
        <span key={_index} className={`text-nowrap cursor-pointer py-6 px-1 md:px-6 text-[15px] ${active ? "border-b-2 border-blue-primary text-blue-primary" : "text-secondary"}`} onClick={onClick}>
          {label}
        </span>
      ))}
    </nav>
  );
};

OrdersNav.propTypes = {};

export default OrdersNav;

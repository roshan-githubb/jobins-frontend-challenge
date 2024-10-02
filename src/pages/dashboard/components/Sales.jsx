import PersonalInfos from "./PersonalInfos";
import OrdersNav from "./OrdersNav";

const Sales = () => {
  return (
    <div className="mt-4 dashboard-content-anims">
      <div className="card px-4 lg:px-10 pt-5">
        <PersonalInfos />
        <OrdersNav />
      </div>
    </div>
  );
};

Sales.propTypes = {};

export default Sales;

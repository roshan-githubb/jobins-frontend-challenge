import  Contents  from "../../../shared/Contents";
import Cards from "../components/Cards";
import OrdersList from "../components/OrdersList";
import Sales  from "../components/Sales";
import { DashboardProvider } from "../Store/Store";

const Dashboard = () => {
  return (
    <DashboardProvider>
      <Contents title="Dashboard">
        <Cards />
        <Sales />
        <OrdersList />
      </Contents>
    </DashboardProvider>
  );
};

export default Dashboard;

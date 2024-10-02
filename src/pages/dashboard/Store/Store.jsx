import React, { useState } from "react";
import PropTypes from "prop-types";
import useFetchOrders from "../../../hooks/useFetchOrders";

const initialState = {};
export const DashboardContext = React.createContext(initialState);

export const DashboardProvider = ({ children }) => {
  const [ordersActiveMenu, setOrdersActiveMenu] = useState("all");
  const orderState = useFetchOrders();

  const _orderMenus = [
    {
      label: "All Orders",
      active: ordersActiveMenu === "all",
      onClick: () => {
        orderState.fetchAllOrders("all"); // Fetch all orders
        setOrdersActiveMenu("all");
      },
    },
    {
      label: "Completed",
      active: ordersActiveMenu === "completed",
      onClick: () => {
        orderState.fetchAllOrders("completed"); // Fetch only completed orders
        setOrdersActiveMenu("completed");
      },
    },
    {
      label: "Canceled",
      active: ordersActiveMenu === "canceled",
      onClick: () => {
        orderState.fetchAllOrders("canceled"); // Fetch only canceled orders
        setOrdersActiveMenu("canceled");
      },
    },
  ];

  return (
    <DashboardContext.Provider
      value={{
        _orderMenus,
        orderState,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

DashboardProvider.propTypes = {
  children: PropTypes.node,
};

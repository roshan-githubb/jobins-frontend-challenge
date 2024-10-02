import { useEffect, useState } from "react";
import { _mockOrdersData } from "../pages/dashboard/constants"; 

const useFetchOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filters, setFilters] = useState({
    limit: 10,
    page: 1,
    total: 0,
  });
  const [processing, setProcessing] = useState(true);


  const fetchAllOrders = () => {
    setProcessing(true);

    setTimeout(() => {
      setOrders(_mockOrdersData.data);
      setFilters((prev) => ({
        ...prev,
        total: _mockOrdersData.data.length || 0,
      }));
      setProcessing(false);
    }, 1000);
  };

  useEffect(() => {
    fetchAllOrders();
  }, [filters.limit, filters.page]);

  return { orders, processing, setFilters, filters, fetchAllOrders };
};

export default useFetchOrders;

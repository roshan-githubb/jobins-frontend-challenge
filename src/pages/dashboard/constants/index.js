import BoxPng from "@assets/png/box.png";
import CirclePlusPng from "@assets/png/circle-plus.png";
import ShoppingCartPng from "@assets/png/shopping-cart.png";
import SmartHomePng from "@assets/png/smart-home.png";
import StarPng from "@assets/png/star.png";
export const _filterStatusOptions = [
  {
    label: "All",
    active: true,
    slug: "all",
  },
  {
    label: "Completed",
    active: false,
    slug: "completed",
  },
  {
    label: "Canceled",
    active: false,
    slug: "canceled",
  },
];
export const _filterDateRangeOptions = [
  {
    label: "Daily",
    active: true,
    slug: "days",
  },
  {
    label: "Weekly",
    active: false,
    slug: "weeks",
  },
  {
    label: "Monthly",
    active: false,
    slug: "months",
  },
];
export const _tableHeaders = [
  {
    label: "ID",
  },
  {
    label: "Customer",
  },
  {
    label: "Date",
  },
  {
    label: "Total",
  },
  {
    label: "Method",
  },
  {
    label: "Status",
  },
  {
    label: "Actions",
  },
];
export const _mockOrdersData = {
  data: [
    {
      id: "5089",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5089",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5089",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5089",
      customer: "Steve Jonathan",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5089",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5089",
      customer: "Jack Richard",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5089",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
    {
      id: "5089",
      customer: "Joseph Wheeler",
      date: "6 April, 2023",
      total: "$2,564",
      method: "CC",
      status: "Pending",
    },
  ],
};
export const _sideNavMenuLists = [
  {
    name: "Main Menu",
    isTitle: true,
  },
  {
    name: "Dashboard",
    active: true,
    icon: SmartHomePng,
  },
  {
    name: "Order Management",
    icon: ShoppingCartPng,
  },
  {
    name: "Brand",
    active: false,
    icon: StarPng,
  },
  {
    name: "Products",
    isTitle: true,
  },
  {
    name: "Add Products",
    icon: CirclePlusPng,
  },
  {
    name: "Product List",
    icon: BoxPng,
  },
  
];

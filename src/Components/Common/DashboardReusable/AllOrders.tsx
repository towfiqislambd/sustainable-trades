import React from "react";
import { ordersData } from "@/Components/Data/data";
import OrderReusableTable from "../OrderReusableTable";

const AllOrders = () => {
  return (
    <div>
      <OrderReusableTable data={ordersData} itemsPerPage={5} />
    </div>
  );
};

export default AllOrders;

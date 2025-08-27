import { ordersData } from "@/Components/Data/data";
import React from "react";
import OrderReusableTable from "../OrderReusableTable";

const AllOrders = () => {
  return (
    <div>
      <OrderReusableTable data={ordersData} itemsPerPage={5} />
    </div>
  );
};

export default AllOrders;

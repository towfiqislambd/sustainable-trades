import React from "react";
import { ordersData } from "@/Components/Data/data";
import OrderReusableTable from "../OrderReusableTable";



const PendingOrders = () => {
const pendingorders = ordersData.filter(order => order.status === "Pending");

  return (
    <OrderReusableTable data={pendingorders} itemsPerPage={5}/>
  );
};

export default PendingOrders;

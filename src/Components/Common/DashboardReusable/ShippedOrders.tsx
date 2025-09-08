import React from "react";
import { ordersData } from "@/Components/Data/data";
import OrderReusableTable from "../OrderReusableTable";

const ShippedOrders = () => {
  const shippedorders = ordersData.filter(order => order.status === "Shipped");

  return (
    <>
      <OrderReusableTable data={shippedorders} itemsPerPage={5}/>
    </>
  );
};

export default ShippedOrders;

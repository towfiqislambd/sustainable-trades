import React from "react";
import OrderReusableTable from "../OrderReusableTable";
import { orders, ordersData } from "@/Components/Data/data";

const Fullfillmentorder = () => {

  const Fullfillorders = ordersData.filter(order => order.status === "Local");
  console.log(Fullfillorders);
  

  return (
    <>
      <OrderReusableTable data={Fullfillorders} itemsPerPage={5} />
    </>
  );
};

export default Fullfillmentorder;

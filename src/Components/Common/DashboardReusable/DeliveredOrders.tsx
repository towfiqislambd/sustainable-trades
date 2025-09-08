import React from 'react'
import { ordersData } from '@/Components/Data/data';
import OrderReusableTable from "../OrderReusableTable";

const DeliveredOrders = () => {
  const deliveredorders = ordersData.filter(order => order.status === "Delivered");

  return (
    <>
      <OrderReusableTable data={deliveredorders} itemsPerPage={5}/>
    </>
  );
}

export default DeliveredOrders
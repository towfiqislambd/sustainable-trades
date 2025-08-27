import { ordersData } from '@/Components/Data/data';
import React from 'react'
import OrderReusableTable from "../OrderReusableTable";

const DeliveredOrders = () => {
  const deliveredorders = ordersData.filter(order => order.status === "Delivered");

  return (
    <>
      <OrderReusableTable data={deliveredorders} />
    </>
  );
}

export default DeliveredOrders
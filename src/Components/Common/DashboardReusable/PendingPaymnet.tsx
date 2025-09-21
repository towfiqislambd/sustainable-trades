import React from "react";
import { paymentData } from "@/Components/Data/data";
import PaymentTableReusable from "./PaymentTableReusable";

const PendingPaymnet = () => {
  const pendingpayment = paymentData.filter(data => data.status === "Pending");

  return (
    <div>
      <PaymentTableReusable data={pendingpayment} itemsPerPage={5} />
    </div>
  );
};

export default PendingPaymnet;

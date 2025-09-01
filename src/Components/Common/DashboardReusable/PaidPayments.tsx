import React from "react";
import PaymentTableReusable from "./PaymentTableReusable";
import { paymentData } from "@/Components/Data/data";

const PaidPayments = () => {
  const paidpayementsdata = paymentData.filter(paid => paid.status === "Paid");
  return (
    <div>
      <PaymentTableReusable data={paidpayementsdata} />
    </div>
  );
};

export default PaidPayments;

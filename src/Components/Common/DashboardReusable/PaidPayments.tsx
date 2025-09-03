import React from "react";
import { paymentData } from "@/Components/Data/data";
import PaymentTableReusable from "./PaymentTableReusable";

const PaidPayments = () => {
  const paidpayementsdata = paymentData.filter(paid => paid.status === "Paid");
  return (
    <div>
      <PaymentTableReusable data={paidpayementsdata}  itemsPerPage={5}/>
    </div>
  );
};

export default PaidPayments;

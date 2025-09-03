import React from "react";
import PaymentTableReusable from "./PaymentTableReusable";
import { paymentData } from "@/Components/Data/data";

const PaidPayments = () => {
  const paidpayementsdata = paymentData.filter(paid => paid.status === "Paid");
  return (
    <div>
      <PaymentTableReusable data={paidpayementsdata}  itemsPerPage={5}/>
    </div>
  );
};

export default PaidPayments;

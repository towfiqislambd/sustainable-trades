import React from 'react'
import PaymentTableReusable from './PaymentTableReusable'
import { paymentData } from '@/Components/Data/data'

const FailedPayment = () => {
  const failedpaymentdata = paymentData.filter(failed => failed.status === "Failed")
  return (
    <div>
      <PaymentTableReusable data={failedpaymentdata} itemsPerPage={5}/>
    </div>
  );
}

export default FailedPayment
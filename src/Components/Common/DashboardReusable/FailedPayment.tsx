import React from 'react'
import { paymentData } from '@/Components/Data/data'
import PaymentTableReusable from './PaymentTableReusable'

const FailedPayment = () => {
  const failedpaymentdata = paymentData.filter(failed => failed.status === "Failed")
  return (
    <div>
      <PaymentTableReusable data={failedpaymentdata} itemsPerPage={5}/>
    </div>
  );
}

export default FailedPayment
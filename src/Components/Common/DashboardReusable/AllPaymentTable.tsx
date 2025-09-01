import React from 'react'
import PaymentTableReusable from './PaymentTableReusable'
import { paymentData } from '@/Components/Data/data'

const AllPaymentTable = () => {

  return (
    <div><PaymentTableReusable data={paymentData} itemsPerPage={5}/></div>
  )
}

export default AllPaymentTable
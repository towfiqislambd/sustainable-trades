"use client";
import React from "react";
import TradesTabs from "./TradesTabs";

const CanceledTrades = ({ canceledTradeData }: any) => {
  const canceltradesdata = canceledTradeData?.filter(
    (cancel: any) => cancel.status === "cancelled"
  );

  return (
    <>
      <TradesTabs tradeRequests={canceltradesdata} />
    </>
  );
};
export default CanceledTrades;

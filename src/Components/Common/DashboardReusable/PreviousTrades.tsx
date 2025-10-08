"use client";
import React from "react";
import TradesTabs from "./TradesTabs";

const ApprovedTrades = ({ approveTradeData }: any) => {
  const approvedTrades = approveTradeData?.filter(
    (trade: any) => trade.status === "accepted"
  );

  return (
    <>
      <TradesTabs tradeRequests={approvedTrades} />
    </>
  );
};

export default ApprovedTrades;

"use client";
import React from "react";
import TradesTabs from "./TradesTabs";
import { tradeRequests } from "@/Components/Data/data";

const PendingTrades = ({ pendingTradeData }: any) => {
  console.log("pendingbeforedata", pendingTradeData);

  const PendingtradesData = pendingTradeData?.filter(
    (data: any) => data.status === "pending"
  );

  console.log("pendeingafterdata", PendingtradesData);

  return (
    <>
      <TradesTabs tradeRequests={PendingtradesData} />
    </>
  );
};

export default PendingTrades;

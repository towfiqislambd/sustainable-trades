"use client";
import React from "react";
import TradesTabs from "./TradesTabs";
import { tradeRequests } from "@/Components/Data/data";

const PendingTrades = () => {
  const PendingtradesData = tradeRequests.filter(
    Pending => Pending.status === "Pending"
  );

  console.log("pending", PendingtradesData);

  return (
    <>
      <TradesTabs tradeRequests={PendingtradesData} />
    </>
  );
};

export default PendingTrades;

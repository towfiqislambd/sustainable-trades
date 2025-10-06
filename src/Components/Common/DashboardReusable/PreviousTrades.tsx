"use client";
import React from "react";
import TradesTabs from "./TradesTabs";
import { tradeRequests } from "@/Components/Data/data";

const ApprovedTrades = () => {
  const approvedTrades = tradeRequests.filter(
    (trade) => trade.status === "Approved"
  );

  return <></>;
};

export default ApprovedTrades;

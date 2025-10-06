"use client";
import React from "react";
import TradesTabs from "./TradesTabs";
import { tradeRequests } from "@/Components/Data/data";

const SentTrades = () => {
  const senttradedata = tradeRequests.filter(
    (trade) =>
      trade.status === "Pending" ||
      trade.status === "Approved" ||
      trade.status === "Canceled"
  );

  return <></>;
};

export default SentTrades;

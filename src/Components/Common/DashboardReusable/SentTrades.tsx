"use client";
import React from "react";
import TradesTabs from "./TradesTabs";
import { tradeRequests } from "@/Components/Data/data";

const SentTrades = () => {
  const senttradedata = tradeRequests.filter(
    trade =>
      trade.status === "Pending" ||
      trade.status === "Approved" ||
      trade.status === "Canceled"
  );

  console.log("sent", senttradedata);

  return (
    <>
      <TradesTabs tradeRequests={senttradedata} />
    </>
  );
};

export default SentTrades;

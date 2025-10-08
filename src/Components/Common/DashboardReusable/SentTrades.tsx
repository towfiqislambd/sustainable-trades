"use client";
import { useTradesdata } from "@/Hooks/api/dashboard_api";
import React from "react";
import TradesTabs from "./TradesTabs";

const SentTrades = () => {
  const { data: tradeData } = useTradesdata("sent");
  return (
    <>
      <TradesTabs tradeRequests={tradeData?.data} />
    </>
  );
};

export default SentTrades;

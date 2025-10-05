"use client";
import React from "react";
import TradesTabs from "./TradesTabs";
import { tradeRequests } from "@/Components/Data/data";

const CanceledTrades = () => {
  const canceltradesdata = tradeRequests.filter(
    cancel => cancel.status === "Canceled"
  );

  console.log("canceltrades", canceltradesdata);

  return (
    <>
      <TradesTabs tradeRequests={canceltradesdata} />
    </>
  );
};

export default CanceledTrades;

import React from "react";
import TradesTabs from "./TradesTabs";
import { tradeRequests } from "@/Components/Data/data";

const SentTrades = () => {
  const senttradedata = tradeRequests.filter(sent => sent.status === "Sent");
  return (
    <>
      <TradesTabs tradeRequests={senttradedata} />
    </>
  );
};

export default SentTrades;

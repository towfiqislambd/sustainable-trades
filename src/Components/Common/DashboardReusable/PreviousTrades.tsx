import React from "react";
import TradesTabs from "./TradesTabs";
import { tradeRequests } from "@/Components/Data/data";

const PreviousTrades = () => {
  const prevtradesdata = tradeRequests.filter(
    Previous => Previous.status === "Previous"
  );
  return (
    <>
      <TradesTabs tradeRequests={prevtradesdata} />
    </>
  );
};

export default PreviousTrades;

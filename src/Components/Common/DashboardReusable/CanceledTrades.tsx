import React from "react";
import TradesTabs from "./TradesTabs";
import { tradeRequests } from "@/Components/Data/data";

const CanceledTrades = () => {
  const canceltradesdata = tradeRequests.filter(
    cancel => cancel.status === "Canceled"
  );
  return (
    <>
      <TradesTabs tradeRequests={canceltradesdata} />
    </>
  );
};

export default CanceledTrades;

"use client";
import { useSearchParams } from "next/navigation";
import TradeLayout from "../TradeLayout";

const TradeDetailsPage = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as
    | "Pending"
    | "Sent"
    | "Previous"
    | "Canceled"
    | null;

  return (
    <TradeLayout initialTab={tabParam ?? "Pending"}>
      {[
        tabParam === "Pending" ? (
          <div>Pending Trade details page</div>
        ) : (
          <div></div>
        ),
        tabParam === "Sent" ? <div>Sent Trade details page</div> : <div></div>,
        tabParam === "Previous" ? (
          <div>Previous Trade details page</div>
        ) : (
          <div></div>
        ),
        tabParam === "Canceled" ? (
          <div>Canceled Trade details page</div>
        ) : (
          <div></div>
        ),
      ]}
    </TradeLayout>
  );
};

export default TradeDetailsPage;

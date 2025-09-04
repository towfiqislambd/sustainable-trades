"use client";
import TradeDetailsReusable from "@/Components/Common/DashboardReusable/TradeDetailsReusable";
import TradeLayout from "../TradeLayout";
import { useSearchParams } from "next/navigation";

const TradeDetailsPage = () => {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab") as
    | "Pending"
    | "Sent"
    | "Approved"
    | "Canceled"
    | null;

  return (
    <TradeLayout initialTab={tabParam ?? "Pending"}>
      {[
        tabParam === "Pending" ? (
          <div>
            <TradeDetailsReusable />
          </div>
        ) : (
          <div></div>
        ),
        tabParam === "Sent" ? (
          <div>
            <TradeDetailsReusable />
          </div>
        ) : (
          <div></div>
        ),
        tabParam === "Approved" ? (
          <div>
            <TradeDetailsReusable />
          </div>
        ) : (
          <div></div>
        ),
        tabParam === "Canceled" ? (
          <div>
            <TradeDetailsReusable />
          </div>
        ) : (
          <div></div>
        ),
      ]}
    </TradeLayout>
  );
};

export default TradeDetailsPage;

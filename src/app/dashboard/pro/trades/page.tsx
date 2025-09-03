import TradeLayout from "@/app/dashboard/pro/trades/TradeLayout";
import SentTrades from "@/Components/Common/DashboardReusable/SentTrades";
import PendingTrades from "@/Components/Common/DashboardReusable/PendingTrades";
import PreviousTrades from "@/Components/Common/DashboardReusable/PreviousTrades";
import CanceledTrades from "@/Components/Common/DashboardReusable/CanceledTrades";

const Page = () => {
  return (
    <TradeLayout initialTab="Pending">
      {[
        <PendingTrades />,
        <SentTrades />,
        <PreviousTrades />,
        <CanceledTrades />,
      ]}
    </TradeLayout>
  );
};

export default Page;

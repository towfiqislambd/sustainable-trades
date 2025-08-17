import CommunityMember from "@/Components/PageComponents/mainPages/homePageComponents/CommunityMember";
import ExploreProduct from "@/Components/PageComponents/mainPages/homePageComponents/ExploreProduct";
import FeaturedShops from "@/Components/PageComponents/mainPages/homePageComponents/FeaturedShop";
import HomeBanner from "@/Components/PageComponents/mainPages/homePageComponents/HomeBanner";
import HowItWorks from "@/Components/PageComponents/mainPages/homePageComponents/HowItWorks";
import MagicMarkers from "@/Components/PageComponents/mainPages/homePageComponents/MagicMarkers";
import OurMission from "@/Components/PageComponents/mainPages/homePageComponents/OurMission";
import Pricing from "@/Components/PageComponents/mainPages/homePageComponents/Pricing";
import Subscribe from "@/Components/PageComponents/mainPages/homePageComponents/Subscribe";

const Page = () => {
  return (
    <>
      <HomeBanner />
      <HowItWorks />
      <MagicMarkers />
      <FeaturedShops />
      <ExploreProduct />
      <OurMission />
      <CommunityMember />
      <Pricing
        description="No matter how you want to manage your shop, we got you covered!"
        button1="Monthly Billing"
        button2="Annual Billing"
      />
      <Subscribe />
    </>
  );
};

export default Page;

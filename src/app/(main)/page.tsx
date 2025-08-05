import FeaturedShop from "@/Components/PageComponents/mainPages/homePageComponents/FeaturedShop";
import HomeBanner from "@/Components/PageComponents/mainPages/homePageComponents/HomeBanner";
import HowItWorks from "@/Components/PageComponents/mainPages/homePageComponents/HowItWorks";
import MagicMarkers from "@/Components/PageComponents/mainPages/homePageComponents/MagicMarkers";

const Page = () => {
  return (
    <>
      <HomeBanner />
      <HowItWorks />
      <MagicMarkers />
      <FeaturedShop />
    </>
  );
};

export default Page;

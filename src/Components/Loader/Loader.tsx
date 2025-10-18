import Container from "@/Components/Common/Container";

// Shop Banner Skeleton
export const ShopBannerSkeleton = () => {
  return (
    <section className="md:h-[600px] bg-gray-200 bg-no-repeat bg-center bg-cover bg-blend-overlay py-10 bg-fixed mb-10 animate-pulse">
      <Container>
        <div className="flex flex-col md:flex-row justify-between">
          {/* Left - Shop Info */}
          <div className="space-y-4 w-full">
            {/* Shop Profile */}
            <div className="flex md:justify-start justify-center items-center ">
              <div className="size-22 md:size-[153px] rounded-full bg-gray-300"></div>
            </div>

            {/* Shop Name + Badges */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center">
              <div className="h-8 w-48 bg-gray-300 rounded"></div>

              <div className="flex gap-3 items-center">
                <div className="size-6 md:size-10 bg-gray-300 rounded-full"></div>
                <div className="size-6 md:size-10 bg-gray-300 rounded-full"></div>
              </div>
            </div>

            {/* Description */}
            <div className="h-5 bg-gray-300 rounded w-72"></div>
            <div className="h-5 bg-gray-300 rounded w-64"></div>

            {/* Location */}
            <div className="flex gap-3 items-center md:pt-3">
              <div className="size-5 bg-gray-300 rounded"></div>
              <div className="h-5 w-40 bg-gray-300 rounded"></div>
            </div>

            {/* Reviews */}
            <div className="flex gap-3 items-center">
              {Array.from({ length: 5 }).map((_, idx) => (
                <div
                  key={idx}
                  className="size-9 shrink-0 shadow border border-gray-300 rounded-full bg-gray-300"
                ></div>
              ))}
              <div className="h-5 w-8 bg-gray-300 rounded"></div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-2.5 md:gap-5 items-center md:pt-5">
              <div className="h-10 w-40 bg-gray-300 rounded"></div>
              <div className="h-10 w-40 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Single Product Skeleton
export const ProductSkeleton = () => {
  return (
    <div className="rounded-t-lg relative animate-pulse">
      <div className="w-full h-[200px] rounded-lg bg-gray-200 border border-gray-100" />
      <div className="flex justify-between items-center mt-4">
        <div className="h-5 w-2/3 bg-gray-200 rounded" />
        <div className="size-6 rounded-full bg-gray-200" />
      </div>
      <div className="flex justify-between mt-3 items-center">
        <div className="h-9 w-28 sm:w-32 bg-gray-200 rounded-[5px]" />
      </div>
    </div>
  );
};

// All Listing Filtering Skeleton
export const FilteringSkeleton = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between lg:items-end mb-8 animate-pulse">
      {/* Left - Filter */}
      <div className="flex flex-col md:flex-row gap-3.5 lg:gap-7 md:items-center w-full">
        {/* Category */}
        <div className="w-full space-y-2">
          <div className="h-10 w-full md:w-[192px] bg-gray-200 rounded-lg"></div>
        </div>

        {/* Sub Category */}
        <div className="w-full space-y-2">
          <div className="h-10 w-full md:w-[192px] bg-gray-200 rounded-lg"></div>
        </div>

        {/* Sort By */}
        <div className="w-full space-y-2">
          <div className="h-10 w-full md:w-[192px] bg-gray-200 rounded-lg"></div>
        </div>
      </div>

      {/* Right - Search */}
      <div className="flex gap-3 items-center mt-3 lg:mt-0">
        {/* Search bar */}
        <div className="h-10 w-full md:w-[280px] bg-gray-200 rounded-[6px]"></div>

        {/* Reset button */}
        <div className="h-10 w-28 bg-gray-300 rounded-lg"></div>
      </div>
    </div>
  );
};

// About Shop Skeleton
export const AboutShopSkeleton = () => {
  return (
    <section id="About" className="mt-4 md:mt-8 lg:mt-16 animate-pulse">
      <Container>
        <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>

        <div className="flex flex-col lg:flex-row gap-5 md:gap-10 lg:items-center">
          <div className="flex flex-col sm:flex-row gap-5 md:gap-10 grow">
            {/* Left - Image skeleton */}
            <div className="size-auto xs:size-[220px] md:size-[280px] lg:size-[350px] shrink-0 bg-gray-200 rounded-xl"></div>

            {/* Right - Text skeletons */}
            <div className="flex flex-col gap-4 w-full">
              <div className="h-5 w-48 bg-gray-200 rounded"></div>
              <div className="h-4 w-40 bg-gray-200 rounded"></div>

              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-200 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
              </div>

              <div className="h-4 w-32 bg-gray-200 rounded mt-5"></div>

              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-200 rounded"></div>
                <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
                <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right - Meet the seller (hidden for now) */}
          <div className="hidden lg:block shrink-0 w-[200px]">
            <div className="h-5 w-40 bg-gray-200 rounded mb-4"></div>
            <div className="flex gap-4 items-center mb-4">
              <div className="size-14 bg-gray-200 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-28 bg-gray-200 rounded"></div>
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <div className="size-14 bg-gray-200 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 w-28 bg-gray-200 rounded"></div>
                <div className="h-3 w-24 bg-gray-200 rounded"></div>
              </div>
            </div>
            <div className="h-4 w-32 bg-gray-200 rounded mt-5"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Shop Policies Skeleton
export const ShopPoliciesSkeleton = () => {
  return (
    <section id="Shop_policies" className="mt-4 md:mt-8 lg:mt-16 animate-pulse">
      <Container>
        {/* Section Title */}
        <div className="h-6 w-40 bg-gray-200 rounded mb-5"></div>

        {/* Payment Methods Title */}
        <div className="h-5 w-56 bg-gray-200 rounded mb-2"></div>

        {/* Payment Methods List */}
        <div className="flex flex-col gap-2 mb-6">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-4 w-40 bg-gray-200 rounded"></div>
          <div className="h-4 w-28 bg-gray-200 rounded"></div>
        </div>

        {/* Returns/Exchanges Title */}
        <div className="h-5 w-48 bg-gray-200 rounded mt-5 mb-2"></div>

        {/* Return Policy Text */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-200 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
          <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </Container>
    </section>
  );
};

// Shop FAQ Skeleton
export const ShopFAQSkeleton = () => {
  return (
    <section className="pt-3 md:pt-6 lg:pt-12 pb-5 md:pb-10 lg:pb-20 animate-pulse">
      <Container>
        {/* Section Title */}
        <div className="h-6 w-24 bg-gray-200 rounded mb-4 md:mb-6"></div>

        <div className="border-b-2 border-gray-200 py-3 md:py-5">
          <div className="flex justify-between items-center">
            <div className="h-5 w-2/3 bg-gray-200 rounded"></div>
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          </div>
          <div className="mt-3 space-y-2">
            <div className="h-3 w-full bg-gray-200 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
            <div className="h-3 w-2/3 bg-gray-200 rounded"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

// Product Details Skeleton
export const ProductDetailsSkeleton = () => {
  return (
    <section className="py-10 animate-pulse">
      <div className="container mx-auto">
        {/* Breadcrumb skeleton */}
        <div className="flex gap-2 items-center mb-5">
          <div className="h-4 w-16 bg-gray-200 rounded"></div>
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-16">
          {/* Left Side Skeleton */}
          <div className="space-y-16">
            {/* Product Gallery */}
            <div className="flex gap-4">
              {/* Thumbnails */}
              <div className="space-y-3">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-[120px] h-[100px] bg-gray-200 rounded-lg"
                  ></div>
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1 h-[445px] bg-gray-200 rounded-xl"></div>
            </div>

            {/* Reviews Skeleton */}
            <div className="space-y-5">
              <div className="h-8 w-40 bg-gray-200 rounded"></div>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                  <div className="h-3 w-full bg-gray-200 rounded"></div>
                  <div className="h-3 w-3/4 bg-gray-200 rounded"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Skeleton */}
          <div className="space-y-10">
            {/* Product Description Section */}
            <div className="space-y-4">
              <div className="h-4 w-28 bg-gray-200 rounded"></div>
              <div className="h-6 w-2/3 bg-gray-200 rounded"></div>
              <div className="h-20 w-full bg-gray-200 rounded"></div>
            </div>

            {/* Price & Quantity */}
            <div className="flex items-center justify-between">
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-12 w-32 bg-gray-200 rounded"></div>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <div className="h-12 w-full bg-gray-200 rounded"></div>
              <div className="h-12 w-full bg-gray-200 rounded"></div>
              <div className="h-12 w-full bg-gray-200 rounded"></div>
            </div>

            {/* Shop Info */}
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-full bg-gray-200"></div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded"></div>
                <div className="h-4 w-40 bg-gray-200 rounded"></div>
              </div>
            </div>

            <div className="h-10 w-40 bg-gray-200 rounded"></div>
          </div>
        </div>

        {/* More Products & Subscribe Skeleton */}
        <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
        <div className="grid grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-60 bg-gray-200 rounded-xl"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Card Skeleton
export const PricingSkeletonCard = () => (
  <div className="border border-gray-200 shadow rounded-2xl p-6 w-[400px] flex flex-col justify-between animate-pulse">
    <div>
      <div className="size-12 rounded-full bg-gray-300 mb-4" />

      <div className="h-6 bg-gray-300 rounded w-1/2 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-6" />

      <div className="flex gap-2 items-end mb-5">
        <div className="h-8 bg-gray-300 rounded w-20" />
        <div className="h-4 bg-gray-200 rounded w-10" />
      </div>

      <hr className="my-5 text-gray-300" />

      <div className="space-y-5 mb-10">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-3">
            <div className="size-10 rounded-full bg-gray-300 shrink-0" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-1/3" />
              <div className="h-3 bg-gray-200 rounded w-2/3" />
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="h-12 bg-gray-300 rounded-lg w-full" />
  </div>
);

// Shop List  Skeleton
export const ShopListSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2.5 md:gap-5 md:items-center border-b last:border-b-0 border-gray-200 py-3 animate-pulse">
      {/* shop Image skeleton */}
      <div className="size-22 shrink-0 rounded-lg bg-gray-200"></div>

      {/* Shop Description skeleton */}
      <div className="flex flex-col md:flex-row gap-2.5 md:gap-5 md:items-center grow w-full">
        <div className="grow space-y-3">
          {/* Shop Name */}
          <div className="h-3 w-1/2 bg-gray-200 rounded"></div>

          {/* Review stars */}
          <div className="flex gap-1 items-center py-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="h-4 w-4 bg-gray-300 rounded"></div>
            ))}
          </div>

          {/* Address line */}
          <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

// Single Shop Skeleton
export const SingleShopSkeleton = () => {
  return (
    <div className="text-center animate-pulse">
      {/* Circle Image Skeleton */}
      <figure className="size-44 mx-auto rounded-full overflow-hidden bg-gray-200"></figure>

      {/* Shop Name Skeleton */}
      <div className="mt-4 h-4 w-32 mx-auto bg-gray-200 rounded"></div>

      {/* Address Skeleton */}
      <div className="mt-2 h-3 w-48 mx-auto bg-gray-200 rounded"></div>
    </div>
  );
};

// Cart Item Skeleton
export const CartItemSkeleton = () => {
  return (
    <div className="border border-gray-300 p-5 rounded-lg bg-white animate-pulse">
      {/* Shop Info */}
      <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-3 mb-5">
        <div className="flex gap-2 sm:gap-5 items-center">
          <div className="size-12 rounded-full bg-gray-200" />
          <div className="h-5 w-40 bg-gray-200 rounded" />
        </div>

        <div className="flex gap-2 items-center">
          <div className="h-5 w-28 bg-gray-200 rounded" />
        </div>

        <div className="h-8 w-24 bg-gray-200 rounded-full" />
      </div>

      {/* Product Info */}
      <div className="space-y-6">
        {[1, 2].map(i => (
          <div
            key={i}
            className="flex flex-col sm:flex-row gap-5 border-b last:border-b-0 border-gray-300 pb-7 last:pb-0"
          >
            {/* Product Image */}
            <div className="w-full sm:w-[180px] h-[140px] bg-gray-200 rounded-lg" />

            <div className="grow space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="h-5 w-40 bg-gray-200 rounded" />
                <div className="h-6 w-16 bg-gray-200 rounded" />
              </div>

              {/* Remove Button Skeleton */}
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Conversation Card Skeleton
export const ConversationCardSkeleton = () => {
  return (
    <div className="border-b-2 border-gray-200 py-7 px-5 flex justify-between items-center animate-pulse">
      <div className="flex gap-3 items-center">
        <div className="size-16 rounded-full bg-gray-200" />
        <div className="flex flex-col gap-2">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="h-3 w-64 bg-gray-200 rounded" />
        </div>
      </div>
      <div className="shrink-0 flex flex-col items-end gap-3">
        <div className="h-4 w-16 bg-gray-200 rounded" />
        <div className="h-5 w-6 bg-gray-200 rounded" />
      </div>
    </div>
  );
};

// Message Skeleton
export const MessageSkeleton = ({ isSender = false }) => {
  return (
    <div
      className={`flex gap-3 animate-pulse ${
        isSender ? "justify-end" : "justify-start"
      }`}
    >
      <div className="size-11 rounded-full bg-gray-300 shrink-0" />
      <div className="max-w-[550px]">
        <div className="bg-gray-300 h-5 w-40 rounded-md mb-2" />
        <div className="bg-gray-300 h-5 w-56 rounded-md mb-2" />
      </div>
    </div>
  );
};

// Trade Offer Skeleton
export const TradeOfferSkeleton = () => {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-6 bg-gray-200 rounded w-1/3"></div>
      <div className="h-5 bg-gray-200 rounded w-1/4"></div>

      <div className="space-y-2">
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
        <div className="h-10 bg-gray-200 rounded"></div>
      </div>

      <div className="h-24 bg-gray-200 rounded"></div>

      <div className="flex gap-4">
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  );
};

// Edit Shop Skeleton
export const EditShopBannerSkeleton = () => {
  return (
    <section className="mb-12 animate-pulse">
      <div className="h-[350px] bg-gray-200 relative">
        <Container>
          <div className="flex h-[350px] items-end relative">
            {/* Profile image placeholder */}
            <figure className="size-[180px] -mb-10 relative bg-gray-300 rounded-full border-[5px] border-white" />
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex justify-between items-center mt-14">
          <div className="flex-1">
            <div className="h-8 w-60 bg-gray-300 rounded mb-4" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 bg-gray-300 rounded-full" />
              <div className="h-5 w-48 bg-gray-300 rounded" />
            </div>

            <div className="flex gap-8 items-center">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-2 items-center">
                  <div className="size-7 bg-gray-300 rounded-full" />
                  <div className="h-5 w-12 bg-gray-300 rounded" />
                </div>
              ))}
              <div className="h-5 w-24 bg-gray-300 rounded" />
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <div>
              <div className="h-5 w-40 bg-gray-300 rounded mb-2" />
              <div className="h-4 w-32 bg-gray-200 rounded" />
            </div>
            <div className="size-14 bg-gray-300 rounded-full" />
          </div>
        </div>
      </Container>
    </section>
  );
};

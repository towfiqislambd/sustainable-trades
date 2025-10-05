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
                  className="size-9 shrink-0 shadow border border-gray-300 rounded-full bg-gray-6300"
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
const FilteringSkeleton = () => {
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

export default FilteringSkeleton;

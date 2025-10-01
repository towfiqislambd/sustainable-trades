import toast from "react-hot-toast";
import useClientApi from "@/Hooks/useClientApi";
import { useServerApi } from "@/Hooks/useServerApi";
import { useQueryClient } from "@tanstack/react-query";

// =======================================================
//  SSR (Server Side Rendering)
// =======================================================

// Site Settings
export async function getSiteSettings() {
  return useServerApi("/api/site-settings", 3600);
}

// Banner
export async function getBannerData() {
  return useServerApi("/api/banners", 3600);
}

// How It Works
export async function getHowItWorksData() {
  return useServerApi("/api/how-it-works", 3600);
}

// Product Categories
export async function getProductCategories() {
  return useServerApi("/api/categories", 3600);
}

// Featured Shops
export async function getFeaturedShops() {
  return useServerApi("/api/shops/featured", 3600);
}

// Get Mission Data
export async function getMissionData() {
  return useServerApi("/api/our-mission", 3600);
}

// Dynamic Pages
export async function getDynamicPages() {
  return useServerApi("/api/dynamic-pages", 3600);
}

// Details Dynamic page
export async function getSingleDynamicPage(slug: string) {
  return useServerApi(`/api/dynamic-pages/single/${slug}`, 3600);
}

// =======================================================
//  CSR (Client Side Rendering)
// =======================================================

// Get Pricing Data
export const getPricingData = (interval: string) => {
  return useClientApi({
    method: "get",
    key: ["get-pricing", interval],
    endpoint: "/api/subscriptions",
    params: { interval },
    queryOptions: {
      retry: false,
    },
  });
};

// NewsLetter
export const useNewsletter = () => {
  return useClientApi({
    method: "post",
    key: ["newsletter"],
    endpoint: "/api/newsletter/subscribe",
    onSuccess: (data: any) => {
      if (data?.message) {
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Get Tutorials
export const getTutorials = (search: string, type: string) => {
  return useClientApi({
    method: "get",
    key: ["get-tutorials", search, type],
    endpoint: "/api/tutorials",
    params: { type, search },
    queryOptions: {
      retry: false,
    },
  });
};

// Get FAQ
export const getFAQ = () => {
  return useClientApi({
    method: "get",
    key: ["get-faq"],
    endpoint: "/api/faq/all",
  });
};

// Get Contact
export const getContact = () => {
  return useClientApi({
    method: "get",
    key: ["get-contact"],
    endpoint: "/api/contact",
  });
};

// Get Terms
export const getTerms = () => {
  return useClientApi({
    method: "get",
    key: ["get-terms"],
    endpoint: "/api/terms-and-conditions",
  });
};

// Get Infringement
export const getInfringement = () => {
  return useClientApi({
    method: "get",
    key: ["get-infringement"],
    endpoint: "/api/infringement-report",
  });
};

// Site Settings Client
export const getSiteSettingsClient = () => {
  return useClientApi({
    method: "get",
    key: ["get-site-settings"],
    endpoint: "/api/site-settings",
  });
};

// Product Categories Client
export const getProductCategoriesClient = () => {
  return useClientApi({
    method: "get",
    key: ["get-product-category"],
    endpoint: "/api/categories",
  });
};

// Product Sub Categories Client
export const getProductSubCategoriesClient = () => {
  return useClientApi({
    method: "get",
    key: ["get-product-sub-category"],
    endpoint: "/api/sub-categories",
  });
};

// Shop Details
export const getShopDetails = (id: string) => {
  return useClientApi({
    method: "get",
    isPrivate: true,
    key: ["get-shop-details", id],
    enabled: !!id,
    endpoint: `/api/shop/${id}`,
    queryOptions: {
      retry: false,
    },
  });
};

// Featured Listings
export const getFeaturedListings = (id: string) => {
  return useClientApi({
    method: "get",
    isPrivate: true,
    key: ["get-featured-listings", id],
    enabled: !!id,
    endpoint: `/api/shop/products/featured/${id}`,
  });
};

// All Listings
export const getAllListings = (
  id: string,
  category_id: string,
  sub_category_id: string,
  short_by: string,
  search: string,
  page: string
) => {
  return useClientApi({
    method: "get",
    key: [
      "get-all-listings",
      id,
      category_id,
      sub_category_id,
      short_by,
      search,
      page,
    ],
    enabled: !!id,
    endpoint: `/api/shop/products/${id}`,
    isPrivate: true,
    params: { category_id, sub_category_id, short_by, search, page },
    queryOptions: {
      retry: false,
    },
  });
};

// Follow Shop
export const useFollowShop = (shop_id: string) => {
  const queryClient = useQueryClient();

  return useClientApi({
    method: "post",
    key: ["follow-shop", shop_id],
    isPrivate: true,
    endpoint: `/api/follow-shop/${shop_id}`,
    onSuccess: (data: any) => {
      if (data?.success) {
        queryClient.invalidateQueries("get-shop-details" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Add Favorite
export const useAddFavorite = () => {
  const queryClient = useQueryClient();

  return useClientApi({
    method: "post",
    key: ["add-favorite"],
    isPrivate: true,
    onSuccess: (data: any) => {
      if (data?.success) {
        queryClient.invalidateQueries("get-all-listings" as any);
        queryClient.invalidateQueries("get-featured-listings" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Product Details
export const getProductDetails = (id: string) => {
  return useClientApi({
    method: "get",
    isPrivate: true,
    key: ["get-product-details", id],
    enabled: !!id,
    endpoint: `/api/product-details/${id}`,
    queryOptions: {
      retry: false,
    },
  });
};

// Get Product Cart
export const getProductCart = () => {
  return useClientApi({
    method: "get",
    isPrivate: true,
    key: ["get-product-cart"],
    endpoint: "/api/cart",
    queryOptions: {
      retry: false,
    },
  });
};

// Add To Cart
export const useAddToCart = (product_id: any) => {
  return useClientApi({
    method: "post",
    key: ["add-to-cart"],
    isPrivate: true,
    endpoint: `/api/add-to-cart/${product_id}`,
    onSuccess: (data: any) => {
      if (data?.success) {
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Remove From Cart
export const useRemoveFromCart = (cart_Item_id: number | null) => {
  const queryClient = useQueryClient();
  return useClientApi({
    method: "delete",
    key: ["remove-from-cart"],
    isPrivate: true,
    endpoint: `/api/cart/item/remove/${cart_Item_id}`,
    onSuccess: (data: any) => {
      if (data?.success) {
        queryClient.invalidateQueries("get-product-cart" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Remove Cart
export const useRemoveCart = (cart_id: number | null) => {
  const queryClient = useQueryClient();
  return useClientApi({
    method: "delete",
    key: ["remove-cart"],
    isPrivate: true,
    endpoint: `/api/cart/remove/${cart_id}`,
    onSuccess: (data: any) => {
      if (data?.success) {
        queryClient.invalidateQueries("get-product-cart" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Clear Cart
export const useClearCart = () => {
  const queryClient = useQueryClient();
  return useClientApi({
    method: "delete",
    key: ["clear-cart"],
    isPrivate: true,
    endpoint: "/api/cart/empty",
    onSuccess: (data: any) => {
      if (data?.success) {
        queryClient.invalidateQueries("get-product-cart" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Update Cart
export const useUpdateCart = (cart_id: number | null) => {
  const queryClient = useQueryClient();
  return useClientApi({
    method: "post",
    key: ["update-cart"],
    isPrivate: true,
    endpoint: `/api/cart/update/${cart_id}`,
    onSuccess: (data: any) => {
      if (data?.success) {
        queryClient.invalidateQueries("get-product-cart" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Update Shop Photo
export const useUpdateShopPhoto = () => {
  const queryClient = useQueryClient();
  return useClientApi({
    method: "post",
    key: ["update-shop-photo"],
    isPrivate: true,
    endpoint: "/api/shop/image-update",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onSuccess: (data: any) => {
      if (data?.success) {
        queryClient.invalidateQueries("get-shop-details" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Update Shop Banner
export const useUpdateShopBanner = () => {
  const queryClient = useQueryClient();
  return useClientApi({
    method: "post",
    key: ["update-shop-banner"],
    isPrivate: true,
    endpoint: "/api/shop/banner-update",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    onSuccess: (data: any) => {
      if (data?.success) {
        queryClient.invalidateQueries("get-shop-details" as any);
        toast.success(data?.message);
      }
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

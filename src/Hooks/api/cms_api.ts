import { useServerApi } from "@/Hooks/useServerApi";
import useClientApi from "@/Hooks/useClientApi";
import toast from "react-hot-toast";

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

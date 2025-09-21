import { useServerApi } from "@/Hooks/useServerApi";

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

// Get Mission Data
export async function getMissionData() {
  return useServerApi("/api/our-mission", 3600);
}

// Get Pricing Data
export async function getPricingData() {
  return useServerApi("/api/subscriptions", 3600);
}

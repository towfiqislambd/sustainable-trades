import React from "react";
import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
import { getDynamicPages, getSiteSettings } from "@/Hooks/api/cms_api";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const siteSettings = await getSiteSettings();
  const dynamicPage = await getDynamicPages();

  return (
    <>
      <Navbar
        siteSettings={siteSettings?.data}
        dynamicPage={dynamicPage?.data}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

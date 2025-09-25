import React from "react";
import Footer from "@/Shared/Footer";
import Navbar from "@/Shared/Navbar";
import { getSiteSettings } from "@/Hooks/api/cms_api";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const siteSettings = await getSiteSettings();

  return (
    <>
      <Navbar siteSettings={siteSettings?.data} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

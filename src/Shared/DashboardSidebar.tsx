"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

type NavLinsProps = {
  id: number;
  label: string;
  path: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
};

type SidebarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  dashboardNavLinks: NavLinsProps[];
};

const DashboardSidebar = ({
  open,
  setOpen,
  dashboardNavLinks,
}: SidebarProps) => {
  const pathname = usePathname();

  const navLabelClass = "text-secondary-black font-semibold text-lg mb-4";

  return (
    <aside
      className={`
        ${open ? "translate-x-0" : "-translate-x-full xl:translate-x-0"}
       fixed top-0 left-0 z-[999] 2xl:static max-2xl:h-screen w-72 duration-500 transition-transform border-r border-[#E4E4E4] bg-[#FFFCF9] py-5 px-4 shrink-0 overflow-y-auto side-scrollbar`}
    >
      {/* Nav Links */}
      <nav className="flex flex-col gap-5">
        {dashboardNavLinks?.map(item => {
          const isActive = pathname === item.path;
          return (
            <div key={item.id}>
              {(item?.id === 1 || item?.id === 16 || item?.id === 25) && (
                <p className={navLabelClass}>Menu</p>
              )}
              {(item?.id === 12 || item?.id === 23) && (
                <p className={navLabelClass}>Customer Notifications</p>
              )}
              {item?.id === 14 && (
                <p className={navLabelClass}>Selling Tools</p>
              )}

              <Link
                href={item.path}
                onClick={() => setOpen(false)}
                className={`ml-1 px-2 py-2 flex gap-3 items-center font-semibold border-l-2 hover:bg-gray-100 duration-300 transition-all hover:scale-[1.03] ${
                  isActive
                    ? "text-primary-green border-primary-green"
                    : "text-[#77978F] border-transparent"
                }`}
              >
                {item?.icon}
                {item.label}
              </Link>
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

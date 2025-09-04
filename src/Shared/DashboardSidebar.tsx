"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

type NavLinsProps = {
  id: number;
  label: string;
  path?: string;
  icon: React.ReactElement<React.SVGProps<SVGSVGElement>>;
  children?: NavLinsProps[];
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
  const [openMenus, setOpenMenus] = useState<number[]>([]);

  const toggleMenu = (id: number) => {
    setOpenMenus(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const navLabelClass = "text-secondary-black font-semibold text-lg mb-4";

  return (
    <aside
      className={`fixed top-0 left-0 z-[999] 2xl:static max-2xl:h-screen w-72 border-r border-[#E4E4E4] bg-[#FFFCF9] py-5 px-4 shrink-0 overflow-y-auto side-scrollbar
        transform transition-transform duration-500 ease-in-out
        ${
          open
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 xl:translate-x-0 xl:opacity-100"
        }`}
    >
      <nav className="flex flex-col gap-5">
        {dashboardNavLinks?.map(item => {
          const isActive = pathname === item.path;
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openMenus.includes(item.id);

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

              {hasChildren ? (
                <button
                  onClick={() => toggleMenu(item.id)}
                  className={`w-full ml-1 px-2 py-2 flex justify-between items-center font-semibold border-l-2 transition-all duration-500 ease-in-out hover:bg-gray-100 hover:scale-[1.03] ${
                    isActive
                      ? "text-primary-green border-primary-green"
                      : "text-[#77978F] border-transparent"
                  }`}
                >
                  <span className="flex gap-3 items-center">
                    {item.icon}
                    {item.label}
                  </span>
                </button>
              ) : (
                <Link
                  href={item.path ?? "#"}
                  onClick={() => setOpen(false)}
                  className={`ml-1 px-2 py-2 flex gap-3 items-center font-semibold border-l-2 transition-all duration-700 ease-in-out hover:bg-gray-100 hover:scale-[1.03] ${
                    isActive
                      ? "text-primary-green border-primary-green"
                      : "text-[#77978F] border-transparent"
                  }`}
                >
                  {item.icon}
                  {item.label}
                </Link>
              )}

              {/* Submenu */}
              {hasChildren && (
                <div
                  className={`ml-8 mt-2 flex flex-col gap-2 overflow-hidden transition-all duration-700 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {item.children?.map(child => {
                    const isChildActive = pathname === child.path;
                    return (
                      <Link
                        key={child.id}
                        href={child.path ?? "#"}
                        onClick={() => setOpen(false)}
                        className={`px-2 py-1 flex gap-2 items-center font-medium border-l-2 transition-all duration-300 hover:bg-gray-100 ${
                          isChildActive
                            ? "text-primary-green border-primary-green"
                            : "text-[#77978F] border-transparent"
                        }`}
                      >
                        {child.icon}
                        {child.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

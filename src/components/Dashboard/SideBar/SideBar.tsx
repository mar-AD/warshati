"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import logoFull from "/public/images/logos/warshati_logo.png";
import logoSmall from "/public/images/logos/favicon.ico";
import useMediaQuery from "@/lib/UseMediaQuery";
import { NavItem } from "@/lib/types";

const Sidebar = ({
  showToggleButton = true,
  forceShowOnMobile = false,
  onLinkClick,
  navItems,
}: {
  showToggleButton?: boolean;
  forceShowOnMobile?: boolean;
  onLinkClick?: () => void;
  navItems: NavItem[];
}) => {
  const isScreen = useMediaQuery("(min-width: 1200px)");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted && !isScreen && !forceShowOnMobile) return null;

  return (
    <aside
    className={cn(
      "h-screen bg-light-gray flex flex-col justify-between relative transition-all duration-300",
      isScreen? isCollapsed? "w-[88px] px-2 py-1": "w-[256px] p-6": "w-[256px] p-6",
    )}
    >
      <div
        className={cn(
          "flex flex-col items-center",
          isCollapsed ? "gap-10" : "gap-14"
        )}
      >
        <div className="w-full flex justify-center items-center">
          <Image
            className={cn(
              "transition-all duration-300",
              isCollapsed ? "w-[70px]" : "w-full"
            )}
            src={isCollapsed ? logoSmall : logoFull}
            alt="Logo"
          />
        </div>

        <nav className="flex flex-col justify-center items-center gap-4 w-full">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={onLinkClick}
              className={cn(
                "font-Inter font-medium w-full rounded-2xl transition-all duration-300 overflow-hidden text-violet-700",
                "hover:bg-[radial-gradient(circle_at_center,_#ebe5f6_0%,_rgba(235,229,246,0.05)_100%)]",
                pathname.startsWith(item.href) && "bg-gray-800 font-semibold",
                isCollapsed
                  ? "text-[10px] px-1 py-2 flex flex-col items-center justify-center text-center gap-1"
                  : "text-[14px] px-4 py-5 flex items-center gap-4 text-left"
              )}
            >
              {item.icon && (
                <Image
                  src={item.icon}
                  alt="icon"
                  width={20}
                  height={20}
                  className="shrink-0"
                />
              )}
              <span
                className={cn(
                  !item.icon && "text-center w-full", 
                  isCollapsed && "w-full"
                )}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

      </div>

      {showToggleButton && (
        <button
          onClick={toggleSidebar}
          className={cn(
            "absolute -right-3 transform -translate-y-1/2 bg-violet-800 text-white text-center rounded-full shadow-md p-1 hover:bg-violet-500 transition-all duration-200 z-50",
            isCollapsed ? "top-[80px]" : "top-[120px]"
          )}
        >
          {isCollapsed ? <ChevronRight size={19} /> : <ChevronLeft size={19} />}
        </button>
      )}
    </aside>
  );
};

export default Sidebar;

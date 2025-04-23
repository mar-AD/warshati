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

const navItems = [
  { name: "Programs", href: "/Dashboard/programs" },
  { name: "Projects", href: "/Dashboard/projects" },
  { name: "Community", href: "/Dashboard/community" },
  { name: "Settings", href: "/Dashboard/settings" },
];

const Sidebar = ({
  showToggleButton = true,
  forceShowOnMobile = false,
  onLinkClick
}: {
  showToggleButton?: boolean;
  forceShowOnMobile?: boolean;
  onLinkClick?: () => void;
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
      "h-screen bg-light-gray text-white flex flex-col justify-between relative transition-all duration-300",
      isScreen
        ? isCollapsed
          ? "w-[88px] px-2 py-1"
          : "w-[256px] p-6"
        : "w-[256px] p-6",

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
                "font-Inter font-medium w-full text-center rounded-2xl transition-all duration-300 overflow-hidden text-ellipsis",
                "hover:bg-[radial-gradient(circle_at_center,_#ebe5f6_0%,_rgba(235,229,246,0.05)_100%)] text-violet-700",
                pathname.startsWith(item.href) && "bg-gray-800 font-semibold",
                isCollapsed ? "text-xs px-1 py-2" : "text-[14px] px-4 py-5"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      {showToggleButton && (
        <button
          onClick={toggleSidebar}
          className={cn(
            "absolute -right-3 transform -translate-y-1/2 bg-violet-800 text-white text-center rounded-full shadow-md p-1 hover:bg-violet-500 transition-all duration-200 z-50",
            isCollapsed ? "top-[8%]" : "top-[12%]"
          )}
        >
          {isCollapsed ? <ChevronRight size={19} /> : <ChevronLeft size={19} />}
        </button>
      )}
    </aside>
  );
};

export default Sidebar;

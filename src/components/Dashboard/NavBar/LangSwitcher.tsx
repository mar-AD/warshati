"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { dashLanguages } from "@/lib/data";
import { DashLanguageType } from "@/lib/types";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const LangSwitcher = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<DashLanguageType>(dashLanguages[2]);
  const ref = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  useEffect(() => {
    const found = dashLanguages.find(
      (lang) => lang.code.toLowerCase() === locale.toLowerCase()
    );
    if (found) setSelectedLanguage(found);
  }, [locale]);

  useEffect(() => {
    const clickOutSide = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    window.addEventListener("mousedown", clickOutSide);
    return () => window.removeEventListener("mousedown", clickOutSide);
  }, []);

  const changeLocale = (lang: DashLanguageType) => {
    setSelectedLanguage(lang);
    router.push(pathname, { locale: lang.code });
  };

  return (
    <div ref={ref}>
      <div
        onClick={() => setShowMenu((prev) => !prev)}
        className="flex items-center justify-center gap-x-2 rounded-full cursor-pointer bg-violet-100 dark:bg-violet-800 w-[40px] h-[40px]"
      >
        <Image className="w-[18px] h-[18px]" src={selectedLanguage.flag} alt="" width={18} height={18} />
      </div>
      <div className="relative">
        <div
          className={cn(
            "absolute z-20 right-0 mt-2 bg-white dark:bg-zinc-900 border dark:border-zinc-700 p-1 rounded-md transition-all flex flex-col gap-2",
            showMenu
              ? "visible blur-none opacity-100 scale-100"
              : "invisible blur-sm opacity-0 scale-90"
          )}
        >
          {dashLanguages.map((language, i) => (
            <div
              key={i}
              onClick={() => changeLocale(language)}
              className={cn(
                "p-1 rounded-full cursor-pointer transition-colors",
                selectedLanguage.code.toLowerCase() === language.code.toLowerCase()
                  ? "ring-2 ring-violet-500"
                  : "hover:ring-1 hover:ring-violet-300 dark:hover:ring-violet-700"
              )}
            >
              <Image className="w-[18px] h-[18px]" src={language.flag} alt="" width={18} height={18} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LangSwitcher;
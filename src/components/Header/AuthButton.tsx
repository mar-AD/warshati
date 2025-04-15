import { cn } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector"
import useMediaQuery from "@/lib/UseMediaQuery";
import { useTranslations } from "next-intl";

const AuthButton = ({showMenu}:{showMenu:boolean}) => {
  const t = useTranslations("nav");
  const isScreen = useMediaQuery("(min-width: 1280px) and (max-width: 1430px)")
  return (
    <div className={cn("flex xl:gap-x-20 lg:gap-x-4 items-center max-xl:hidden",
      showMenu&&"max-lg:flex-col max-lg:flex gap-y-8",
      isScreen && "!gap-x-10"
    )}>
      {/* Website Language Section */}
      <LanguageSelector />
      <div className={cn("grid grid-cols-2 gap-3 md:w-fit w-44 text-nowrap items-center",
        showMenu&&"max-lg:grid-cols-1"
      )}>
        <button className={`btn btn-violet-outline ${isScreen ? "!text-[1rem] max-w-[135px]":""}`}>{t("login")}</button>
        <button className={`btn btn-violet ${isScreen?"!text-[1rem] max-w-[135px]":""}`}> {t("signup")}</button>
      </div>
    </div>
  )
}

export default AuthButton
import { cn } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector"

const AuthButton = ({showMenu}:{showMenu:boolean}) => {
  return (
    <div className={cn("flex xl:gap-x-20 lg:gap-x-4 items-center max-xl:hidden",
      showMenu&&"max-lg:flex-col max-lg:flex gap-y-8"
    )}>
      {/* Website Language Section */}
      <LanguageSelector />
      <div className={cn("grid grid-cols-2 gap-3 md:w-fit w-44 text-nowrap items-center",
        showMenu&&"max-lg:grid-cols-1"
      )}>
        <button className="btn btn-violet-outline">se connecter</button>
        <button className="btn btn-violet">s&apos;inscrire</button>
      </div>
    </div>
  )
}

export default AuthButton
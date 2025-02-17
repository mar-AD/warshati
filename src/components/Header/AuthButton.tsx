import LanguageSelector from "./LanguageSelector"

const AuthButton = () => {
  return (
    <div className="flex gap-x-20 items-center">
      {/* Website Language Section */}
      <LanguageSelector />
      <div className="space-x-2 flex">
        <button className="btn btn-violet-outline">se connecter</button>
        <button className="btn btn-violet">s&apos;inscrire</button>
      </div>
    </div>
  )
}

export default AuthButton
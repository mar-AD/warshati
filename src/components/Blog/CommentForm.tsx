import { useTranslations } from "next-intl"

const CommentForm = () => {
  const t = useTranslations("blog.rest")
  return (
    <div className="py-7 space-y-5">
      <h1 className="font-medium">{t("ajouter")}</h1>
      <form className="grid lg:grid-cols-2 gap-5">
        <div className="col-span-2 w-full">
          <textarea name="" placeholder={t("place_holder_1")} className="border-2 w-full appearance-none rounded-lg max-h-72 min-h-40 p-6 text-sm outline-none" id=""></textarea>
        </div>
        <div className="lg:col-span-1 col-span-2 w-full">
          <input type="text" className="p-4 border w-full rounded-lg" placeholder={t("place_holder_2")}  />
        </div>
        <div className="lg:col-span-1 col-span-2 w-full">
          <input type="text" className="p-4 border rounded-lg w-full" placeholder={t("place_holder_3")}  />
        </div>
        <button className="btn btn-violet !rounded-lg w-full lg:col-start-2 col-span-2 col-end-2 !font-medium">{t("poster_btn")}</button>
      </form>
    </div>
  )
}

export default CommentForm
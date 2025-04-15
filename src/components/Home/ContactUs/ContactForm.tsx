import Image from "next/image"
import contact from "/public/images/contact.png"
import { useTranslations } from "next-intl";
const ContactForm = () => {
    const t = useTranslations("home.contact_form");
  return (
    <form className="grid grid-cols-2 gap-16 p-10 xl:w-[70%] lg:w-1/2 w-full">
                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">{t("first_name")}</label>
                    </div>
                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">{t("last_name")}</label>
                    </div>

                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="email" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">{t("email")}</label>
                    </div>
                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">{t("number")}</label>
                    </div>

                    <div className="col-span-2 gap-y-7 flex flex-col-reverse">
                        <textarea id="" className="outline-none border-b-2 focus:border-black border-black placeholder-shown:border-gray-400 peer w-full" placeholder={t("message_placeholder")}></textarea>
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">{t("message")}</label>
                    </div>
                    <div className=" place-self-end col-span-2  flex flex-col">
                        <button className="rounded-xl bg-violet-500 text-violet-100 p-5 place-self-end">{t("send_message")}</button>
                        <Image src={contact} alt="" />
                    </div>
                </form>
  )
}

export default ContactForm
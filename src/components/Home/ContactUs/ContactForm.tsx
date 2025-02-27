import Image from "next/image"
import contact from "/public/images/contact.png"
const ContactForm = () => {
  return (
    <form className="grid grid-cols-2 gap-16 p-10 xl:w-[70%] lg:w-1/2 w-full">
                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Prénom</label>
                    </div>
                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Nom</label>
                    </div>

                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="email" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">email</label>
                    </div>
                    <div className="space-y-10 flex flex-col-reverse capitalize">
                        <input type="text" id="" className="outline-none border-b-2 w-full focus:border-black border-black placeholder-shown:border-gray-400 peer" placeholder="" />
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Numéro</label>
                    </div>

                    <div className="col-span-2 gap-y-7 flex flex-col-reverse">
                        <textarea id="" className="outline-none border-b-2 focus:border-black border-black placeholder-shown:border-gray-400 peer w-full" placeholder="Écrivez votre message."></textarea>
                        <label htmlFor="" className="peer-placeholder-shown:text-gray-500 text-black peer-focus:text-black">Message</label>
                    </div>
                    <div className=" place-self-end col-span-2  flex flex-col">
                        <button className="rounded-xl bg-violet-500 text-violet-100 p-5 place-self-end">Envoyer un message</button>
                        <Image src={contact} alt="" />
                    </div>
                </form>
  )
}

export default ContactForm
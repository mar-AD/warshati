import Image from "next/image"
import Link from "next/link"
import logo_white from "/public/images/white_logo.png"
import { contacts, links, socials } from "@/lib/data"
const Footer = () => {

    return (
        <div className="bg-[#011C2A] text-white p-16 font-Poppins space-y-8">
            <div className="flex items-start justify-between flex-wrap gap-16">
                <Image src={logo_white} alt="" className="" />
                <div className="max-w-80 text-slate-200">
                    Plateforme éducative ludique et innovante offrant des laboratoires digitaux STEAM & AI, des maquettes interactives, des ateliers de coding et des prototypes, pour réinventer l’apprentissage, stimuler la créativité et préparer à exceller dans le monde de demain.
                </div>
                <div className="space-y-5">
                    <h1 className="font-semibold capitalize">liens rapides</h1>
                    <div className="flex flex-col gap-y-4">
                        {links.map((link, index) => (
                            <Link key={index} className="text-slate-400 hover:text-white duration-500" href={link.link}>
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="space-y-5">
                    <h1 className="font-semibold capitalize">Nous contacter</h1>
                    <div className="space-y-10">
                        {
                            contacts.map(({ Icon, value }, index) => (
                                <div className="flex items-center gap-5" key={index}>
                                    <Icon className="size-4" />
                                    <p className="max-w-72 text-slate-400 hover:text-white duration-500">{value}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="space-y-5 bg-black/50 h-fit p-5 rounded-xl">
                    <h1 className="font-semibold capitalize">Inscrivez-vous à notre newsletter</h1>
                    <div className="space-x-4">
                        <input className="bg-transparent placeholder:text-xs outline-none" type="text" placeholder="Votre adresse e-mail" />
                        <button className="bg-slate-950 p-2 rounded-lg">s&apos;abonner</button>
                    </div>
                    <p className="text-xs text-slate-400 max-w-96">* Vous enverra des mises à jour hebdomadaires pour une meilleure gestion de vos outils.</p>
                </div>
            </div>
            <div className="place-self-end col-span-5 space-y-6">
                    <p className="text-slate-400">&copy; Warshati. Tous droits réservés - warshati {new Date().getFullYear()}</p>
                    <div className="flex gap-8 flex-wrap justify-end">
                        {
                            socials.map(({ Icon, link }, index) => (
                                <Link href={link} className="bg-slate-800 p-2 rounded-full hover:bg-slate-100 hover:text-slate-900 duration-500 z-10" key={index} target="_blank">
                                    <Icon className="size-4" />
                                </Link>
                            ))
                        }
                    </div>
                </div>
        </div>
    )
}

export default Footer
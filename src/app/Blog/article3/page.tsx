"use client"
import Image from "next/image"
import article_3 from "/public/images/Blog/articles/article_3.jpg"
import BlogTemp from "@/components/Blog/BlogTemp"
import CommentForm from "@/components/Blog/CommentForm"
import Reviews from "@/components/Blog/Reviews"
import PopularTags from "@/components/Blog/PopularTags"

const page = () => {

    return (
        <>
            <BlogTemp>
                <div className="space-y-8">
                    <h1 className="text-2xl font-extrabold">
                        <span className="text-violet-900">Article 3 : </span>
                        L&apos;intelligence artificielle dans les classes marocaines : Opportunités et défis

                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div className="space-y-3">
                        <b>
                            L’intelligence artificielle (IA) est en train de devenir un outil puissant dans les écoles marocaines.
                            Mais comment l’intégrer efficacement et quelles sont les limites à surmonter ?
                        </b>
                        <ul className="list-disc list-inside space-y-3">
                            <li className="text-violet-900"><b>Opportunités : </b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>
                                    Création de parcours d’apprentissage personnalisés grâce à l’analyse des données.                                </li>
                                <li>
                                    Automatisation des tâches répétitives pour les enseignants.
                                </li>
                                <li>
                                    Outils interactifs, comme les chatbots éducatifs, pour répondre aux questions des
                                    élèves.                                </li>
                            </ul>
                            <li className="text-violet-900"><b>Défis  :</b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>
                                    Besoin de former les enseignants aux technologies émergentes.
                                </li>
                                <li>
                                    Assurer l’accès égal à ces technologies dans les régions rurales.
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_3} alt="" className="w-[53rem]" />
                    </div>
                    <div className="border-b-2">
                    <PopularTags />
                        <Reviews />
                        <CommentForm />
                    </div>
                </div>
            </BlogTemp>
        </>
    )
}

export default page
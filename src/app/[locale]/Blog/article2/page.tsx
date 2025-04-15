"use client"
import Image from "next/image"
import article_2 from "/public/images/Blog/articles/article_2.jpg"
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
                        <span className="text-violet-900">Article 2 : </span>
                        Top 5 des projets STEAM à réaliser avec vos étudiants                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div>
                        <b>Envie d’inspirer vos élèves ? Voici 5 projets STEAM à mettre en place dans votre classe pour un
                            apprentissage à la fois ludique et instructif.
                        </b>
                        <ul className="list-disc list-inside space-y-2">
                            <li className="text-violet-900"><b>Projets : </b> </li>
                            <ul className="list-decimal list-inside space-y-3">
                                <li>
                                    <b>Créer un bras robotisé avec Arduino :</b> Initiez les élèves à la programmation et à
                                    l&apos;électronique.

                                </li>
                                <li>
                                    <b>Maquette de ville intelligente :</b> Explorez les concepts de l’IoT et de l’énergie renouvelable.
                                </li>
                                <li>
                                    <b>Art numérique avec Python :</b> Combinez technologie et créativité pour produire des œuvres
                                    uniques.
                                </li>
                                <li>
                                    <b>Analyse de données météorologiques locales :</b> Enseignez la collecte et l’analyse de données
                                    avec des outils modernes.

                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_2} alt="" className="w-[53rem]" />
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
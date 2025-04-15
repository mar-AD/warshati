"use client"
import Image from "next/image"
import article_5 from "/public/images/Blog/articles/article_5.jpg"
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
                        <span className="text-violet-900">Article 5 : </span>
                        L&apos;impact des maquettes interactives sur la compréhension scientifique des jeunes
                        apprenants.
                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div className="space-y-3">
                        <b>
                            Les maquettes interactives ne sont pas seulement amusantes ; elles permettent aux élèves de mieux
                            comprendre les concepts scientifiques en les rendant tangibles.
                        </b>
                        <ul className="list-disc list-inside space-y-3">
                            <li className="text-violet-900"><b>Exemples :  </b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>
                                    Une maquette d’un système solaire où les élèves peuvent manipuler les planètes
                                    pour comprendre leur orbite.
                                </li>
                                <li>
                                    Une maquette hydraulique pour expliquer les principes de la mécanique des fluides.
                                </li>
                            </ul>
                            <li className="text-violet-900"><b>Résultats  :</b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>
                                    Selon une étude récente, les élèves utilisant des maquettes interactives retiennent 40 %
                                    d’informations en plus par rapport à une leçon classique
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_5} alt="" className="w-[56rem]" />
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
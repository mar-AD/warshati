"use client"
import Image from "next/image"
import article_11 from "/public/images/Blog/articles/article_11.jpg"
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
                        <span className="text-violet-900">Article 11 : </span>
                        Intelligence artificielle et créativité : Une alliance inattendue                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div className="space-y-3">
                        <b>
                            L’IA est souvent associée à des tâches analytiques, mais elle peut également être un puissant outil
                            pour libérer la créativité des élèves.

                        </b>
                        <ul className="list-disc list-inside space-y-3">
                            <li className="text-violet-900"><b>Génération d’œuvres d’art assistées par IA  : </b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>Génération d’œuvres d’art assistées par IA.</li>
                                <li>Création de récits interactifs à l’aide de modèles de langage.</li>
                            </ul>

                            <li className="text-violet-900"><b>Pourquoi cela fonctionne : </b> </li>
                            <p className="text-gray-700">
                                L’IA offre une nouvelle perspective et inspire des idées uniques.
                            </p>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_11} alt="" className="w-[56rem]" />
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
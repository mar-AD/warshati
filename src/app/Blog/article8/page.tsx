"use client"
import Image from "next/image"
import article_8 from "/public/images/Blog/articles/article_8.jpg"
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
                        <span className="text-violet-900">Article 8 : </span>
                        Gamification dans l&apos;éducation : Un levier puissant pour l&apos;engagement.
                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div className="space-y-3">
                        <b>
                            La gamification transforme l&apos;apprentissage en une aventure immersive et motivante. Mais comment
                            cela fonctionne-t-il exactement ?

                        </b>
                        <ul className="list-disc list-inside space-y-3">
                            <li className="text-violet-900"><b>Exemples :  </b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>Utilisation de systèmes de points et de récompenses.</li>
                                <li>Création de défis adaptés au niveau de chaque élève.</li>
                            </ul>

                            <li className="text-violet-900"><b>Résultats observés  :   </b> </li>
                            <p className="text-gray-700">
                                Les élèves participants montrent un engagement accru de 30 %.
                            </p>
                            <li className="text-violet-900"><b>Exemple Warshati  : </b> </li>
                            <p className="text-gray-700">
                                Un quiz interactif en mathématiques permet aux élèves de progresser dans un jeu tout en
                                consolidant leurs connaissances                            </p>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_8} alt="" className="w-[56rem]" />
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
"use client"
import Image from "next/image"
import article_1 from "/public/images/Blog/articles/article_1.jpg"
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
                        <span className="text-violet-900">Article 1 : </span>
                        Comment les Smart Workshops transforment l&apos;apprentissage des élèves?
                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div>
                        <b>Les méthodes éducatives traditionnelles évoluent, et les Smart Workshops révolutionnent la façon
                            dont les élèves apprennent. Mais qu&apos;est-ce qui rend ces ateliers si spéciaux ?
                        </b>
                        <p className="font-extralight">Les Smart Workshops combinent théorie et pratique grâce à des outils numériques et des approches interactives. Par exemple, en travaillant sur des projets STEAM, les élèves développent non seulement des compétences techniques, mais aussi la collaboration et la créativité.</p>
                        <ul className="list-disc list-inside">
                            <li className="text-violet-900"><b>Avantages clés :</b> </li>
                            <ul className="list-decimal list-inside">
                                <li>
                                    Meilleure compréhension des concepts complexes grâce à l’apprentissage actif.
                                </li>
                                <li>
                                    Développement des compétences essentielles pour le 21ᵉ siècle, comme la résolution de problèmes et la pensée critique.
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="lg:w-full lg:h-96 h-56 overflow-hidden">
                        <Image src={article_1} alt="" className="lg:-translate-y-16 -translate-y-8" />
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
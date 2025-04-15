"use client"
import Image from "next/image"
import article_4 from "/public/images/Blog/articles/article_4.jpg"
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
                        <span className="text-violet-900">Article 4 : </span>
                        Coding pour enfants : Où commencer et pourquoi c&apos;est crucial ?
                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div className="space-y-3">
                        <b>
                            L’intelligence artificielle (IA) est en train de devenir un outil puissant dans les écoles marocaines.
                            Mais comment l’intégrer efficacement et quelles sont les limites à surmonter ?
                        </b>
                        <ul className="list-disc list-inside space-y-3">
                            <li className="text-violet-900"><b>Pourquoi c’est important :</b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>
                                    Le coding stimule la pensée logique et la créativité.
                                </li>
                                <li>
                                    Les compétences numériques sont indispensables dans presque tous les métiers.
                                </li>
                            </ul>
                            <li className="text-violet-900"><b>Défis  :</b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>
                                    Plateformes en ligne comme Scratch ou Code.org.
                                </li>
                                <li>
                                    Ateliers pratiques, comme ceux proposés par <b>Warshati</b>, pour une immersion totale.
                                </li>
                            </ul>
                            <li className="text-violet-900"><b>Conseil : </b> </li>
                            <p>Commencez avec des projets simples, comme la création de jeux, pour maintenir l’intérêt
                                des enfants.</p>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_4} alt="" className="w-[53rem]" />
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
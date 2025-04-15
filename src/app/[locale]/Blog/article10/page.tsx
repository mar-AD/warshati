"use client"
import Image from "next/image"
import article_10 from "/public/images/Blog/articles/article_10.jpg"
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
                        <span className="text-violet-900">Article 10 : </span>
                        Pourquoi intégrer l’IoT dans
                        l’éducation ?

                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div className="space-y-3">
                        <b>
                            L’ingénierie est un domaine souvent perçu comme abstrait. Les maquettes permettent de rendre ces
                            concepts concrets et compréhensibles.
                        </b>
                        <ul className="list-disc list-inside space-y-3">
                            <li className="text-violet-900"><b>Exemples d’activités  : </b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>
                                    Construction de ponts en matériaux recyclés pour comprendre les forces et
                                    structures.
                                </li>
                                <li>
                                    Création de systèmes d’irrigation miniatures pour enseigner les principes
                                    hydrauliques.

                                </li>
                            </ul>
                            <li className="text-violet-900"><b>Bénéfices pédagogiques :</b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>
                                    Engagement actif des élèves.
                                </li>
                                <li>
                                    Meilleure visualisation des concepts techniques complexes
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_10} alt="" className="w-[53rem]" />
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
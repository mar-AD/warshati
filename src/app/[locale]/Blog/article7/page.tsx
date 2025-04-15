"use client"
import Image from "next/image"
import article_7 from "/public/images/Blog/articles/article_7.jpg"
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
                        <span className="text-violet-900">Article 7 : </span>
                        Pourquoi intégrer l’IoT dans
                        l’éducation ?
                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div className="space-y-3">
                        <b>
                            L&apos;Internet des Objets (IoT) révolutionne l&apos;industrie, mais saviez-vous qu&apos;il peut aussi transformer les
                            salles de classe ?
                        </b>
                        <ul className="list-disc list-inside space-y-3">
                            <li className="text-violet-900"><b>Applications éducatives de l’IoT : </b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>Suivi en temps réel des expériences scientifiques.</li>
                                <li>Construction de modèles de maisons intelligentes avec capteurs connectés.</li>
                                <li>Analyse de données environnementales locales.</li>
                            </ul>

                            <li className="text-violet-900"><b>Impact sur l’apprentissage  : </b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>Approfondissement de la compréhension des concepts techniques.</li>
                                <li>Développement des compétences en gestion de données.</li>
                            </ul>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_7} alt="" className="w-[56rem]" />
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
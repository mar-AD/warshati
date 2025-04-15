"use client"
import Image from "next/image"
import article_12 from "/public/images/Blog/articles/article_12.jpg"
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
                        <span className="text-violet-900">Article 12 : </span>
                        Construire une culture STEAM dans les écoles marocaines
                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div className="space-y-3">
                        <b>
                            Pour préparer les élèves à un avenir technologique, les écoles marocaines doivent intégrer une
                            culture STEAM forte.
                        </b>
                        <ul className="list-disc list-inside space-y-3">
                            <li className="text-violet-900"><b>Étapes clés  : </b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>Former les enseignants aux nouvelles méthodes pédagogiques.</li>
                                <li>Intégrer des projets pratiques dès le plus jeune âge.</li>
                                <li>Collaborer avec des plateformes comme Warshati pour bénéficier d’outils innovants.</li>
                            </ul>

                            <li className="text-violet-900"><b>Résultat attendu :</b> </li>
                            <p className="text-gray-700">
                                Des élèves motivés, curieux et prêts à relever les défis du futur
                            </p>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_12} alt="" className="w-[56rem]" />
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
"use client"
import Image from "next/image"
import article_9 from "/public/images/Blog/articles/article_9.jpg"
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
                        <span className="text-violet-900">Article 9 : </span>
                        STEAM pour l’inclusion : Rendre la technologie accessible à tous
                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div className="space-y-3">
                        <b>
                            Les programmes STEAM ne sont pas réservés à une élite ; ils sont un outil puissant pour promouvoir
                            l’inclusion.
                        </b>
                        <ul className="list-disc list-inside space-y-3">
                            <li className="text-violet-900"><b>Initiatives inclusives: </b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>Ateliers adaptés aux élèves ayant des besoins spécifiques.</li>
                                <li>Utilisation d’outils accessibles, comme les tablettes avec commandes vocales.</li>
                            </ul>

                            <li className="text-violet-900"><b>Impact sociétal : </b> </li>
                            <p className="text-gray-700">
                                Encourager la diversité dans les carrières scientifiques et techniques.
                            </p>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_9} alt="" className="w-[56rem]" />
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
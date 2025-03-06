"use client"
import Image from "next/image"
import article_6 from "/public/images/Blog/articles/article_6.jpg"
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
                        <span className="text-violet-900">Article 6 : </span>
                        Les compétences du 21ᵉ siècle développées grâce aux programmes STEAM
                        Introduction                    </h1>
                    <small className="text-[10px] font-medium">Publié le 14 Janvier 2025</small><br />
                    <div className="space-y-3">
                        <b>
                            Dans un monde en constante évolution, les compétences du 21ᵉ siècle, comme la créativité, la
                            collaboration et la pensée critique, sont indispensables. Comment les programmes STEAM
                            contribuent-ils à leur développement ?
                        </b>
                        <ul className="list-disc list-inside space-y-3">
                            <li className="text-violet-900"><b>Exemples :  </b> </li>
                            <ul className="list-decimal list-inside space-y-2">
                                <li>Collaboration à travers des projets de groupe.</li>
                                <li>Résolution de problèmes avec des défis pratiques.</li>
                                <li>Communication grâce à la présentation des résultats.</li>
                            </ul>

                            <li className="text-violet-900"><b>Exemples concret:  </b> </li>
                            <p className="text-gray-700">
                                Dans un atelier STEAM, des élèves ont créé un système de filtration d&apos;eau, combinant chimie, ingénierie et biologie.
                            </p>
                        </ul>
                    </div>
                    <div className="overflow-hidden">
                        <Image src={article_6} alt="" className="w-[56rem]" />
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
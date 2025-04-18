"use client"

    import { ReactNode } from "react";
    import Hero from "@/components/Blog/Hero/Hero";
    import articleData from "@/data/articles.json";
    import { socials } from "@/lib/data";
    import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
    import Image from "next/image";
    import useMediaQuery from "@/lib/UseMediaQuery";
    import { cn } from "@/lib/utils";
    import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

    export default function BlogLayout({ children }: { children: ReactNode }) {
    const isMediumScreen = useMediaQuery("(max-width: 1000px)");
    const t = useTranslations("blog");
    const tArticles = useTranslations("blog.articles");

    const translatedArticles = articleData.map((article) => ({
        ...article,
        title: tArticles(`${article.slug}.title`),
        article: tArticles(`${article.slug}.article`),
        date: tArticles(`${article.slug}.date`),
    }));
    

    const sujets: string[] = t.raw("layout.populaires");

    return (
        <div className="lg:px-14 md:px-16 px-10 pb-10 pt-[9.04rem] space-y-20 font-Poppins bg-light-gray">
        <Hero />
        <div className="font-Poppins flex max-lg:flex-col-reverse justify-end gap-x-10 relative">
            {/* Socials */}
            <div className="border w-fit lg:absolute lg:left-0 mx-5 px-2 py-3 rounded-lg bg-white hidden lg:flex lg:flex-col items-center justify-center">
            {socials.map(({ Icon, link, followers }, index) => (
                <Link
                href={link}
                key={index}
                className="flex items-center gap-3 text-sm rounded-lg hover:bg-slate-100 p-3 duration-300"
                >
                <Icon className="size-4" />
                <p className="text-xs font-bold">{followers}</p>
                </Link>
            ))}
            </div>

            {/* Main Content */}
            <div className="space-y-8 lg:w-1/2">
            <div className="space-y-6">
                <h1 className="text-[32px] font-bold">{t("layout.title")}</h1>
                <p className="border-l-2 border-black px-4 leading-normal">
                {t.rich("layout.text", {
                    bold: (chunks) => <b>{chunks}</b>,
                    br: () => <br />,
                })}
                </p>
            </div>
            {children}
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
            <div className="space-y-4">
                <h1 className="text-base font-medium">{t("layout.sujetsPopulaires")}</h1>
                <div className="flex flex-wrap items-start gap-3">
                {sujets.map((subject, index) => (
                    <p key={index} className="text-[10px] bg-slate-100 py-2 px-4 w-fit rounded-lg">
                    {subject}
                    </p>
                ))}
                </div>
            </div>

            {/* Carousel */}
            <div className="py-10">
                <h1 className="lg:mb-7">{t("layout.articlesCor")}</h1>
                <Carousel
                opts={{ align: "start", loop: true }}
                orientation={isMediumScreen ? "horizontal" : "vertical"}
                className="w-full lg:max-w-lg"
                >
                <CarouselPrevious className="max-lg:hidden bg-violet-800 text-white rounded-lg" />
                <CarouselContent className="lg:h-[2340px] pt-5">
                    {translatedArticles.map((article, index) => (
                    <CarouselItem
                        key={index}
                        className={cn("pt-1 lg:basis-28 basis-full m-4 bg-white rounded-lg border")}
                    >
                        <div className="p-3 space-y-3">
                        <div className="rounded-lg xl:h-56 h-40 overflow-hidden">
                            <Image
                            src={article.image}
                            width={900}
                            height={900}
                            alt={article.title}
                            />
                        </div>
                        <p className="text-xs bg-violet-400/30 w-fit px-4 py-1 rounded-lg font-medium text-blue-800 capitalize">
                            {article.article}
                        </p>
                        <h1 className="font-semibold text-lg">{article.title}</h1>
                        <div className="flex justify-between items-center">
                            <p className="text-xs text-slate-400">{article.date}</p>
                            <Link
                            href={`/Blog/${article.slug}`}
                            className="btn !rounded-lg !text-xs !h-9 btn-violet-outline"
                            >
                            {t("rest.savoirPlus")}
                            </Link>
                        </div>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext className="bg-violet-800 text-white rounded-lg max-lg:hidden" />
                </Carousel>
            </div>
            </div>
        </div>
        </div>
    );
}

"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { useLocale, useTranslations } from "next-intl"; // or your own i18n setup
import articleData from "@/data/articles.json";
import articleFr from "../../../../../messages/fr.json";
import articleEn from "../../../../../messages/en.json";
import articleAr from "../../../../../messages/ar.json";
import PopularTags from "@/components/Blog/PopularTags";
import Reviews from "@/components/Blog/Reviews";
import CommentForm from "@/components/Blog/CommentForm";
import Image from "next/image";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const locale = useLocale();
  const t = useTranslations("blog.rest")

  const translatedArticles =
  locale === 'fr'
  ? articleFr.blog.articles
  : locale === 'ar'
  ? articleAr.blog.articles
  : articleEn.blog.articles;

  const sharedArticle = articleData.find((a) => a.slug === slug);

  const translatedArticle = translatedArticles.find(
    (a: any) => a.slug === slug
  );


  if (!sharedArticle || !translatedArticle) return notFound();

  const article = { ...sharedArticle, ...translatedArticle };


  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-extrabold">
        <span className="text-violet-900">{article.article} : </span>
        {article.title}
      </h1>
      <small className="text-[10px] font-medium">{t("publie")} {article.date}</small>

      <div>
        <li className="pb-3 list-none">
          <b>{article.content.intro}</b>
        </li>

        {article.content.theoryAndPractice && (
          <p className="font-extralight pb-3">
            {article.content.theoryAndPractice}
          </p>
        )}

        {article.content.projects && (
          <ul className="list-disc list-inside space-y-2">
            <li className="text-violet-900">
              <b>{article.content.head} :</b>
            </li>
            <ul className="list-decimal list-inside space-y-3">
              {article.content.projects.map((p, i) => (
                <li key={i}>
                  <b>{p.name} :</b> {p.description}
                </li>
              ))}
            </ul>
          </ul>
        )}

        {article.content.head_content && (
          <ul className="list-disc list-inside space-y-2">
            <li className="text-violet-900 pb-3">
              <b>{article.content.head} :</b>
            </li>
            <ul className="list-decimal list-inside space-y-2 pb-3">
              {article.content.head_content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </ul>
        )}

        {article.content.head_1_content && (
          <ul className="list-disc list-inside space-y-2">
            <li className="text-violet-900 pb-3">
              <b>{article.content.head_1} :</b>
            </li>
            <ul className="list-decimal list-inside space-y-2 pb-3">
              {article.content.head_1_content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </ul>
        )}

        {article.content.head_2_content && (
          <ul className="list-disc list-inside space-y-2">
            <li className="text-violet-900 pb-3">
              <b>{article.content.head_2} :</b>
            </li>
            <ul className="list-decimal list-inside space-y-2">
              {article.content.head_2_content}
            </ul>
          </ul>
        )}

        {article.content.head_3_content && (
          <ul className="list-disc list-inside space-y-2">
            <li className="text-violet-900 pb-3">
              <b>{article.content.head_3} :</b>
            </li>
            <ul className="list-decimal list-inside space-y-2">
              {article.content.head_3_content}
            </ul>
          </ul>
        )}
      </div>

      {/* Image section */}
      {article.slug === articleData[0].slug ? (
        <div className="lg:w-full lg:h-[444px] h-56 overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            className="w-[53rem]"
            width={848}
            height={240}
          />
        </div>
      ) : (
        <div className="lg:w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            className="w-full"
            width={848}
            height={420}
          />
        </div>
      )}

      {/* Other components */}
      <div className="border-b-2">
        <PopularTags />
        <Reviews />
        <CommentForm />
      </div>
    </div>
  );
};

export default ArticlePage;

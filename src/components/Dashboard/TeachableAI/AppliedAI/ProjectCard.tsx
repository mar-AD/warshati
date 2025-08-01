"use-client";

// import Image from "next/image";
import Link from "next/link";
import { Button, Card, CardFooter, CardHeader, Chip, Image } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { Project } from "./types";

const ProjectCard = (
  { title, description, image, url, image_alt }: Project
) => {

  const t = useTranslations("projects");

  return (
    <div className="border-gray-200 rounded-xl  hover:scale-105">
      <Link
        href={url}
        passHref
      >
        <Card isFooterBlurred className="h-[300px] col-span-12 sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <Chip
              variant="shadow"
              classNames={{
                base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
                content: "drop-shadow shadow-black text-white",
              }}
            >
              {t("new")}
            </Chip>
          </CardHeader>
          <Image
            removeWrapper
            alt={image_alt}
            className="z-0 w-full h-full object-cover"
            src={image}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-lg text-white">{title}</p>
                <p className="text-tiny text-white/60">{description}</p>
              </div>
            </div>
            <Button radius="full" size="sm" className="min-w-max w-1/4 p-2 " color="primary" variant="shadow">
              {t("start")}
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </div>
  );
}


export default ProjectCard;
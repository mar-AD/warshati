"use client";

import Image from "next/image";
import constructionImage from "/public/images/Dashboard/construction.png";

interface ComingSoonProps {
    title?: string;
    message?: string;
    imageSize?: number;
}

export default function ComingSoon({
    title = "Coming Soon",
    message = "This feature or page is not available yet. We're working on it!",
    imageSize = 40
}: ComingSoonProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-full text-center p-10">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-2">
                <Image 
                src={constructionImage} 
                alt="Coming Soon" 
                width={imageSize} 
                height={imageSize} 
                className="inline-block"
                /> 
                {title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-md mb-6">
                {message}
            </p>
        </div>
    );
}
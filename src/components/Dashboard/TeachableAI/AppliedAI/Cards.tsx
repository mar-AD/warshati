import Image, { StaticImageData } from 'next/image';

interface CardProps {
    title: string ;
    description: string;
    backgroundImage: StaticImageData;
}

const Cards = ({ title, description, backgroundImage }: CardProps) => {
    const words = title.split(" ");
    const lastWord = words.pop();
    return (
        <div className=" flex flex-col relative bg-white rounded-[27px] shadow-md p-6 max-w-sm my-4 h-[260px] ">
            <div className="absolute top-3 left-3 bg-violet-800 text-white text-[8px] px-4 py-2 rounded-full z-10">
                New
            </div>
            <div className="absolute inset-0 z-0">
                <Image
                src={backgroundImage}
                alt={''}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="rounded-[27px] brightness-[0.6]"
                />
            </div>

            <div className="relative z-10 mt-auto text-white">
                <h2 className="text-lg lg:text-2xl font-extrabold mb-2">
                {words.join(" ")} <br /> {lastWord}
                </h2>
                <div className="flex flex-row md:flex-col 2xl:flex-row justify-start items-start gap-2">
                    <p className="text-[11px] line-clamp-2">{description}</p>
                    <button className="bg-black/30 rounded-full border border-white hover:bg-black/50 text-white font-extrabold py-2 px-8 text-[10px] lg:text-[13px]">
                        Start
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;

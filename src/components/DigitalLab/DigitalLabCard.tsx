import Image, { StaticImageData } from "next/image"


const DigitalLabCard = ({title,content,image}:{title:string,content:string,image:StaticImageData}) => {
  return (
    <div className="border border-violet-700 rounded-xl lg:w-[35rem] w-[23rem] flex flex-col justify-center items-center lg:p-6 p-3 font-Poppins  text-center shadow-2xl shadow-black/30 space-y-6">
      <div className="flex flex-col items-center gap-2 font-bold lg:text-2xl text-lg w-96">
        <Image className="w-16" src={image} alt="" />
        <h1 className="text-violet-800">{title} </h1>
      </div>
      <p className="text-stone-600 max-md:text-xs">{content}
      </p>
    </div>)
}

export default DigitalLabCard
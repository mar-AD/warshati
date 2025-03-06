import Image from "next/image"
import hero_bg from "/public/images/Blog/hero_bg.jpg"
import HeroSearch from "./HeroSearch"
const Hero = () => {
    return (
            <div className="relative justify-center flex ">
                <Image className="max-lg:hidden" src={hero_bg} alt=""  />
                <HeroSearch />
            </div>
    )
}

export default Hero
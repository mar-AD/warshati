import { FAQData } from "@/lib/data"
import FAQCard from "./FAQCard"

const FAQ = () => {

    return (
        <div className="lg:px-20 py-20 px-5 font-Poppins lg:space-y-20 space-y-10 relative">
            <h1 className="font-bold lg:text-[82px] md:text-4xl text-2xl text-center">Questions fréquemment posées</h1>
            <div className="flex justify-center">
                <p className="font-semibold lg:text-[22px] md:text-base text-sm text-stone-400 lg:max-w-[55rem] md:max-w-[40rem] max-w-[25rem] text-center">Sont les questions les plus fréquentes mais n’hésitez pas à nous contactez pour en savoir plus.</p>
            </div>
            <div className="grid lg:grid-cols-2 gap-5 items-start">
                {FAQData.map((faq, index) => (
                    <FAQCard key={index} faq={faq} index={index}/>
                ))}
            </div>
        </div>
    )
}

export default FAQ
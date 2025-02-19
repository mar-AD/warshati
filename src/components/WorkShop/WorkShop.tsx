import WorkShopCard from "./WorkShopCard";

const WorkShop = () => {
    const ageGroups = [
        { ageRange: "6-8 ans", description: "Premiers apprentissages fondamentaux",image:"/images/image_" },
        { ageRange: "9-11 ans", description: "Consolidation et exploration",image:"/images/image-" },
        { ageRange: "12-14 ans", description: "Développement de la pensée critique",image:"/images/image-" },
        { ageRange: "15-18 ans", description: "Spécialisation et autonomisation",image:"/images/image-" },
    ];
    return (
        <div className="p-20 space-y-44">
            <div className="flex justify-center">
            <h1 className="font-Poppins font-extrabold text-[82px] !leading-tight max-w-[70rem] text-center">Smart Workshops Program <span className="text-violet-800">Âge</span></h1>
            </div>
            <div className="grid-cols-4 grid gap-6">
                {ageGroups.map((group, index) => (
                <WorkShopCard image={group.image+index+".png"} ageRange={group.ageRange} description={group.description} key={index}  />
                ))}
            </div>
        </div>
    )
}

export default WorkShop
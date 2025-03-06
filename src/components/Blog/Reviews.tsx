"use client"
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import avatar from "/public/images/Blog/avatar.png"
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const Reviews = () => {
    const reviews = [
        {
            "name": "Sarni Mweden",
            "date": "09 Janvier 2025",
            "review": "Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, mollis forma scelerisque to an aliquam ac non est penatibus hoc, sopien elementum tincidunt nunc magna varius leo."
        },
        {
            "name": "Islam Kinnilchi",
            "date": "09 Janvier 2025",
            "review": "Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, mollis forma scelerisque to an aliquam ac non est penatibus hoc, sopien elementum tincidunt nunc magna varius leo."
        },
        {
            "name": "Amina",
            "date": "09 Janvier 2025",
            "review": "Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor, mollis forma scelerisque to an aliquam ac non est penatibus hoc, sopien elementum tincidunt nunc magna varius leo."
        }
    ]
    const pathname=usePathname()
    return (
        <>
            <div className="border-b-2 py-6">
                <div className={cn("flex items-start gap-5 py-3",
                    pathname.split("/")[2] !=="article1"&&"hidden"
                )}>
                    <Image className="w-20 rounded-full h-16 object-cover" src={avatar} alt="" />
                    <div className="space-y-2">
                        <div>
                            <h2 className="font-medium text-base">Omar Jaidi</h2>
                            <div className="flex gap-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star key={i} className="text-amber-500 fill-amber-500 size-3" />
                                ))}
                            </div>
                        </div>
                        <div>
                            <q className="font-bold text-slate-500">
                                Depuis que j’utilise les Smart Workshops, mes élèves montrent un réel enthousiasme pour
                                les sciences et la technologie !
                            </q>
                        </div>
                        <button className="btn btn-violet !text-sm !p-3 !h-fit !rounded-lg !font-medium">Enseignant STEAM</button>
                    </div>
                </div>
                <h2 className="font-bold">3 comments</h2>
            </div>
            <div>
                {
                    reviews.map((item, index) => (
                        <div className="space-y-5 border-b-2 py-7" key={index}>
                            <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <small className="text-xs text-slate-400 font-light">{item.date}</small>
                            </div>
                            <p className="text-xs font-light">
                                {item.review}
                            </p>
                        </div>
                    ))
                }
            </div>

        </>)
}

export default Reviews
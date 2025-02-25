import { ArrowRight } from 'lucide-react'
import React from 'react'

const PartenariatCard = () => {
  return (
    <div className='relative p-3 border rounded-3xl place-content-center justify-items-center space-y-10 group'>
        <ArrowRight className='absolute right-3 top-5 size-9  group-hover:text-white group-hover:bg-violet-800 duration-300 text-violet-800 border-2 border-violet-800 rounded-full p-1.5' />
        <h1 className='text-3xl border border-violet-800 text-violet-800 text-center size-32 p-8 flex items-center justify-center rounded-full '>
            logo
        </h1>
        <div className='group-hover:bg-violet-700 p-3 rounded-2xl group-hover:space-y-5'>
            <h1 className='text-violet-800 group-hover:text-white capitalize text-3xl font-bold'>lorem ipsum</h1>
            <p className='text-sm text-violet-100 group-hover:h-fit h-0 duration-700 overflow-hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
        </div>
    </div>
  )
}

export default PartenariatCard
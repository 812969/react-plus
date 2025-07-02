'use client'

import { useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'
import { stagger } from 'motion'

interface AnimateHeaderProps {
 content: string[];
}

export function AnimateHeader ({content}: AnimateHeaderProps) {
    const [scope,animate] = useAnimate();

    const isInView = useInView(scope);

    useEffect(() => {
        if(isInView){
            animate('li',
                {
                    y: [-60,0],
                    filter: ['blur(6px)','blur(4px)','blur(0px)']
                },
                {
                    delay: stagger(0.05)
                }
            )
        }
    })

    return (
        <ul ref={ scope } className={'flex gap-x-5 justify-center items-center my-12 py-12'}>
            {
                content.map((item,index) => (
                    <li key={index}>
                      <span className={'text-4xl md:text-6xl lg:text-8xl'}>
                        {item}
                      </span>
                    </li>
                ))
            }

        </ul>
    )
}

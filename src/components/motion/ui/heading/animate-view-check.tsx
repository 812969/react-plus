'use client'

import { ReactNode, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimateViewCheckProps {
    children: Readonly<ReactNode>,
    containerHeightClassName?: string,
}

export function AnimateViewCheck ({ children }: AnimateViewCheckProps) {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div ref={ref} className={'h-48'}>
            {isInView && children}
        </div>
    )
}

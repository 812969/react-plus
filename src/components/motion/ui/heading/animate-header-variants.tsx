import * as motion from "motion/react-client";
import { Variants } from "motion/react";

interface AnimateHeaderVariantsProps {

}
export function AnimateHeaderVariants(){
    const container: Variants = {
        invisible: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }
    const item: Variants = {
        invisible: {
            opacity: 0,
            y: 20,
            filter: 'blur(6px)'
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: ['blur(6px)', 'blur(3px)', 'blur(0px)']
        }
    }
    return (
        <motion.ul className={'flex gap-x-5 justify-center items-center my-12 py-12'}
                   variants={container}
                   initial={'invisible'}
                   animate={'visible'}
        >
            <motion.li variants={ item }>
                <span className={'text-4xl md:text-6xl lg:text-8xl'}>
                    Let's
                </span>
            </motion.li>
            <motion.li variants={ item }>
                <span className={'text-4xl md:text-6xl lg:text-8xl'}>
                    Try
                </span>
            </motion.li>
            <motion.li variants={ item }>
                <span className={'text-4xl md:text-6xl lg:text-8xl'}>
                    It
                </span>
            </motion.li>
        </motion.ul>
    )
}

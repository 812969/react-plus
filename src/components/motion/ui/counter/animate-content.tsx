'use client'
import {motion, Variants} from "motion/react";
import {IoIosCheckboxOutline} from "react-icons/io";
import {cn} from "@/lib/tailwind";

interface AnimateContentProps{
  titles: string[]
}

export function AnimateContent({ titles}: AnimateContentProps){

  const container:Variants = {
    invisible: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,

      }
    },
  };
  const item:Variants = {
    invisible:{
      opacity: 0,
      y: 40,
    },
    visible:{
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  }

  return(
    <motion.div className={'size-full ps-10 flex flex-col justify-center gap-y-5 group'}
                initial={'invisible'}
                animate={'visible'}
                variants={container}

    >
      {
        titles.map((title,index) => (
          <motion.p key={index}
                    className={cn('text-3xl lg:text-4xl duration-300 flex items-center gap-x-5 group-hover:text-purple-700')}
                    variants={item}
          >
            <IoIosCheckboxOutline className={'text-3xl lg:text-4xl duration-300'}/>
            <span className={'text-3xl lg:text-4xl duration-300'}>{title}</span>
          </motion.p>
        ))
      }
    </motion.div>
  )
}

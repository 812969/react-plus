'use client';

import React, {useEffect, useRef} from "react";
import {splitText} from "motion-plus";
import {animate, stagger} from "motion";
import {AnimateText} from "@/components/motion/animate-text";

export function Heading(){

  return (
    <section className={ 'py-48 px-5'}>
      <div className={'max-w-7xl mx-auto h-2 flex flex-col justify-center items-center gap-y-5'}>
        <div  className={'text-center text-5xl md:text-7xl lg:text-9xl'}>
          Example
        </div>
        <h2 className={'text-center text-base sm:text-xl md:text-2xl lg:text-3xl'}>
          <AnimateText
            className="gap-x-2 flex flex-wrap"
            content={['Each', 'example', 'includes', 'ui', '&', 'video', 'explanation', '&', 'pretty', 'source', 'code']}
            stagger={0.05}
            initial={{
              filter: 'blur(8px)',
            }}
            animate={{
              filter: 'blur(0px)',
            }}
          >
          </AnimateText>
        </h2>
        <h3 className={'text-4xl md:text-5xl lg:text-6xl'}>
          ctrl + f
        </h3>
      </div>
    </section>
  )
}

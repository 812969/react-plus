'use client';

import React, {useEffect, useRef} from "react";
import {splitText} from "motion-plus";
import {animate, stagger} from "motion";
export function Heading(){

  const spanRef = useRef(null);
  useEffect((()=>{
    document.fonts.ready.then(()=>{
      if(spanRef.current){
        const element = spanRef.current as unknown as HTMLSpanElement;
        element.style.visibility = 'visible';
        const {chars} = splitText(element);
        animate(chars,
          {
            opacity: [0,1],
            y: [10,0]
          },
          {
            type:'spring',
            duration:2,
            delay: stagger(0.1)
          }
        )

      }
    })
  }))

  return (
    <section className={'bg-slate-200 py-32'}>
      <div className={'max-w-7xl mx-auto h-2 flex flex-col justify-center items-center gap-y-5'}>
        <div ref = {spanRef} className={'text-5xl md:text-7xl lg:text-9xl invisible'}>
          Example
        </div>
        <h2 className={'text-center text-base md:text-2xl lg:text-3xl'}>
          Each example includes ui & video explanation & pretty source code
        </h2>
        <h3 className={'text-4xl md:text-5xl lg:text-6xl'}>
          ctrl + f
        </h3>
      </div>
    </section>
  )
}

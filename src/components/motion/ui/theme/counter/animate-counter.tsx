'use client'


import { AnimateNumber } from "motion-plus/react";
import { useState } from "react";

interface CounterProps{
  value?: number;
  delay?: number
}
export function AnimateCounter({value=2025,delay=100}: CounterProps){
  const [counter,setCounter] = useState(0);
  let timer = setTimeout(()=>{
    setCounter(value);
  },delay)
  return (
    <AnimateNumber>{counter}</AnimateNumber>
  )
}

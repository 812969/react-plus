import { div } from "motion/react-client";
import { AnimateCounter } from "@/components/motion/ui/counter/animate-counter";
import {AnimateContent} from "@/components/motion/ui/counter/animate-content";

export function CounterContainer(){
  const titles = [
    'video',
    'ui',
    'pretty source code'
  ]
  return (
    <div className="flex gap-5 pt-20 px-5 flex-col md:flex-row">
      <div className="h-72 w-full bg-linear-to-tr from-cyan-400 to-purple-400 flex flex-col justify-center items-center gap-y-2">
        <div className="text-white text-7xl lg:text-9xl select-none">
          <AnimateCounter value={2025} delay={50}/>
        </div>
        <p className="text-white text-2xl lg:text-4xl text-center">example</p>

      </div>
      <div className="h-72 [--lc:#000] hover:[--lc:#475065] w-full"
        style={{
          backgroundImage: 'linear-gradient(var(--lc) 1px, transparent 1px), linear-gradient(to right, var(--lc) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: 'center',
        }}
      >
        <AnimateContent titles={titles}/>
      </div>

    </div>
  )
}

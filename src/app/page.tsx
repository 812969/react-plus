import Nav from '@/components/motion/ui/nav/nav'
import {Heading} from "@/components/motion/ui/theme/banner/heading";
import { CounterContainer } from '@/components/motion/ui/counter/counter-container';
import {Header} from '@/components/motion/ui/heading/header'
import { AnimateHeader } from '@/components/motion/ui/heading/animate-header'
import { AnimateHeaderVariants } from '@/components/motion/ui/heading/animate-header-variants'
import { AnimateViewCheck } from '@/components/motion/ui/heading/animate-view-check'
export default function Page(){
  return (
    <div>
      <Nav></Nav>
      <Heading />
      <CounterContainer/>
      <Header title='visable'/>
        <AnimateHeader content={["Let's","Try","It"]}/>
        <AnimateViewCheck>
            <AnimateHeaderVariants/>
        </AnimateViewCheck>
    </div>
  )
}

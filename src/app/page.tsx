import * as motion from 'motion/react-client'
import {cn} from "@/lib/tailwind";
import Nav from '@/components/motion/ui/nav/nav'
import {Heading} from "@/components/motion/ui/theme/banner/heading";
import { CounterContainer } from '@/components/motion/ui/counter/counter-container';
export default function Page(){
  return (
    <div>
      <Nav></Nav>
      <Heading/>
      <CounterContainer/>
    </div>
  )
}

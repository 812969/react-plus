import * as motion from 'motion/react-client'
import {cn} from "@/lib/tailwind";
import Nav from '@/components/motion/ui/nav/nav'
import {Heading} from "@/components/motion/ui/theme/banner/heading";
export default function Page(){
  return (
    <div>
      <Nav></Nav>
      <Heading/>
    </div>
  )
}

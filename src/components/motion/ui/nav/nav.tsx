'use client'

import {RiRobot2Line} from "react-icons/ri";
import {CiYoutube} from "react-icons/ci";
import {Menu} from "@/components/motion/ui/nav/menu";
import {useToggle} from "usehooks-ts";
import {cn} from "@/lib/tailwind";
import Link from "next/link";
import {Aside} from "@/components/motion/ui/nav/aside";

export default function Page() {

  const [open,toggle] = useToggle(false);

  const Tailwind = "https://www.tailwindcss.cn/";
  const React = "https://react.dev/";
  const Zustand = "https://zustand-demo.pmnd.rs/";
  const Motion = "https://motion.dev/";
  const Next = "https://nextjs.org/";
  const Bili = "https://www.bilibili.com/";
  const Youtube = "https://youtube.com/";

  return (
    <nav className={'bg-black text-white px-5 sticky top-0 shadow-md shadow-slate-600 z-1000'}>
      <section className={'max-w-7xl mx-auto h-20 flex gap-x-20 items-center'}>
        <Link className={'text-2xl md:text-4xl  hover:text-purple-700 duration-300'}
           href={'/'}>
          example
        </Link>
        <ul className={'hidden md:flex gap-x-10 items-center'}>
          <li>
            <a className={'p-2 relative block group'} href={ Tailwind } >
              Tailwind
              <Underline/>
            </a>
          </li>
          <li>
            <a className={'p-2 relative block group'} href={ React } >
              React
              <Underline/>
            </a>
          </li>
          <li>
            <a className={'p-2 relative block group'} href={ Zustand } >
              Zustand
              <Underline/>
            </a>
          </li>
          <li>
            <a className={'p-2 relative block group'} href={ Motion } >
              Motion
              <Underline/>
            </a>
          </li>
          <li>
            <a className={'p-2 relative block group'} href={ Next } >
              Next
              <Underline/>
            </a>
          </li>
        </ul>
        <ul className={'hidden lg:flex gap-x-8 items-center ml-auto'}>
          <li>
            <a className={'p-2 text-2xl hover:text-blue-400'} href= { Bili } >
              <RiRobot2Line/>
            </a>
          </li>
          <li>
            <a className={'p-2 text-2xl hover:text-red-400'} href={Youtube}>
              <CiYoutube/>
            </a>
          </li>
        </ul>
        <button className={'ml-auto md:hidden flex items-center justify-center'}>
           <Menu onClick={toggle}/>
        </button>
      </section>

      <Aside open={open} toggle={toggle}/>

    </nav>
  )
}

function Underline(){
  return(
    <span className={cn('absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 duration-300 group-hover:scale-x-100')}></span>
  )
}

import {cn} from "@/lib/tailwind";
import {Menu} from "@/components/motion/ui/nav/menu";
import localFont from 'next/font/local'

interface AsideProps{
  open: boolean;
  toggle: () => void;
}

export function Aside({open,toggle}: AsideProps){
  return (
    <div className={cn('fixed top-0 left-0 w-full h-screen bg-black md:hidden z-1000 duration-500',open ? 'translate-x-full' : 'translate-x-0')}>
      <div className={'h-20 flex justify-end items-center px-5'}>
        <Menu onClick={toggle} enabledHover={true}/>
      </div>
      <section className={'h-full flex flex-col items-center gap-y-8 py-10'}>
        <h2 className={'text-2xl text-purple-500 mb-5'}>Pinia</h2>
        <h3 className={'text-xl text-purple-600'}>Pinia is a store for Vue.js applications</h3>
        <img className={'size-48  shadow-xl shadow-purple-400/20'} src="/assets/images/pinia.jpg" alt=""/>
      </section>
    </div>
  )
}

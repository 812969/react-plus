import {cn} from "@/lib/tailwind";

interface MenuProps{
  enabledHover?: boolean,
  onClick: () => void,
}

export function Menu({enabledHover=true,onClick}: MenuProps){
  return (
    <div className={cn('bg-slate-900 size-12 relative cursor-pointer',enabledHover && 'group')} onClick={onClick}>
      <span className={'absolute inset-0 m-auto w-3/4 h-0.5 bg-white -translate-y-2.5 group-hover:translate-y-0 group-hover:rotate-45 duration-300'}/>
      <span className={'absolute inset-0 m-auto w-3/4 h-0.5 bg-white -translate-y-0 group-hover:scale-0 group-hover:opacity-0 origin-left'}/>
      <span className={'absolute inset-0 m-auto w-3/4 h-0.5 bg-white translate-y-2.5 group-hover:translate-y-0 group-hover:-rotate-45 duration-300'}/>
    </div>
  )
 }

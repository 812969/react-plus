
export function Heading(){
  return (
    <section className={'bg-slate-200 py-32'}>
      <div className={'max-w-7xl mx-auto h-2 flex flex-col justify-center items-center gap-y-5'}>
        <span className={'text-5xl md:text-7xl lg:text-9xl'}>
          Example
        </span>
        <h2 className={'text-center text-base md:text-2xl lg:text-3xl'}>
          Each example includes ui & video explanation & pretty source code
        </h2>
        <h3 className={'text-4xl md:text-5xl lg:text-6xl'}>
          ctrl+f
        </h3>
      </div>
    </section>
  )
}

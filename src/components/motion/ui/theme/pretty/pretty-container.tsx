import { Ticker } from 'motion-plus-react'

export function PrettyContainer(){
    return (
        <div className={'mx-5 h-100 md:h-123 lg:h-136 bg-black overflow-hidden relative'}>
            <InfiniteSlider/>
            <PrettyText/>
        </div>
    )
}

function PrettyText(){
    return (
        <div className={'absolute inset-0 bg-transparent pointer-events-none flex items-center justify-center md:justify-start md:ml-20'}>
            <p className={'text-white text-xl md:text-2xl lg:text-3xl'}>
                More Beautiful Ideas For You .
            </p>
        </div>
    )
}

function InfiniteSlider(){
    return (
        <div className={'space-y-10 -rotate-45 w-[180%]'}>
            <Ticker gap={ 40 } hoverFactor={ 0 } velocity={ -100 } items={[
                <div className={'size-48 bg-rose-500'}>1</div>,
                <div className={'size-48 bg-rose-500'}>2</div>,
                <div className={'size-48 bg-rose-500'}>3</div>,
            ]}/>
            <Ticker gap={ 40 } hoverFactor={ 0 } velocity={ -100 } items={[
                <div className={'size-48 bg-rose-500'}>1</div>,
                <div className={'size-48 bg-rose-500'}>2</div>,
                <div className={'size-48 bg-rose-500'}>3</div>,
            ]}/>
        </div>
    )
}

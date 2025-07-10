
import { ExampleTextRotation } from '@/components/motion/ui/theme/example/eaxample-text-rotation'
import { ExampleVideo } from '@/components/motion/ui/theme/example/example-video'
import { ExampleCodeBlock } from '@/components/motion/ui/theme/example/example-code-block'

export function ExampleContainer(){
    return (
        <div className={'mx-5 h-full flex flex-col lg:flex-row gap-5'}>
            <div className={'w-full h-full flex flex-col md:max-lg:flex-row justify-center md:justify-evenly md:max-lg:items-center gap-5'}>
                <div className={'flex justify-center md:max-lg:justify-evenly md:max-lg:w-1/2 '}>
                    <ExampleTextRotation/>
                </div>
                <div className={'h-full md:max-lg:w-1/2 aspect-video'}>
                    <ExampleVideo/>
                </div>
            </div>
            <div className={'w-full h-full lg:w-1/2 '}>
                <ExampleCodeBlock/>
            </div>

        </div>
    )
}

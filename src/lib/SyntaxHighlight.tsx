
import { ReadFileLine } from '@/components/motion/ui/theme/example/src/path'
import { codeToHtml } from 'shiki'

interface SyntaxHighlightProps {
    path?: string,
    lang?: string,
    theme?: string,
    classNameStr?: string
}

export async function SyntaxHighlight({ path = 'src/components/motion/ui/theme/example/code.txt', lang = 'tsx', theme = 'aurora-x',classNameStr}: SyntaxHighlightProps) {

    const code = await ReadFileLine(path).then((line) => line)
    const out = await codeToHtml(code, {
        lang,
        theme
    })
    return <div dangerouslySetInnerHTML={{__html: out}} className={classNameStr}/>
}


import Image from "next/image"

type ChatBackgroundProps = {
    src:string
}

export function ChatBackground({src, children}:React.PropsWithChildren<ChatBackgroundProps>) {
    return (
        <div className="max w-full max h-full">
            <Image src={src} width={1920} height={1080} alt="chat background" className="w-full h-full absolute top-0 right-0 left-0 bottom-0 -z-10"/>
            {children}
        </div>
    )
}
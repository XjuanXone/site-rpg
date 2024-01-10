'use client'

import { ActionButton } from "./buttons/action";

export function Sidebar() {
    const changeBg=() => {
        console.log("mudei o fundo :D")
    }
    const mensagem=() => {
        console.log("mensagiei o mestre :D")
    }
return (
    <div className="bg-[#ffbd00] h-screen w-fit max-w-56 fixed right-0 p-4">

        <ActionButton tittle="Mudar Paisagem" action={changeBg}/>

        <div className="my-4"/>

        <ActionButton tittle="Mensagem Do Mestre" action={mensagem}/>
    </div>
)
}
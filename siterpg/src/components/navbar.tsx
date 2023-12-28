import { DefaultButton } from "./buttons/default";

export function Navbar() {
    return (
        <nav className="bg-[#ffbd00] flex w-full p-1 gap-7">
            <DefaultButton page="/" tittle="RPG"/>
            <DefaultButton page="/fichas" tittle="Fichas"/>
            <DefaultButton page="/ChatLivre" tittle="Chat Livre"/>   
        </nav>
    )
}
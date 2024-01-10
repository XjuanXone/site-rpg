'use client'

type ActionButtonProps = {
    tittle: string;
    action: () => void;
}

export function ActionButton({tittle, action}:ActionButtonProps){
    return (
        <button onClick={e => action()} className="w-fit h-fit group rounded-lg border border-black bg-blue-400 px-5 py-4 transition-colors hover:bg-yellow-300">
            <p className="text-2xl font-bold"> {tittle} </p>
        </button>
    )
}
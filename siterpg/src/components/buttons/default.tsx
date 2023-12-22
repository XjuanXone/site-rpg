import Link from "next/link";

type DefaultButtonProps = {
    page: string;
    tittle: string;
}

export function DefaultButton({page, tittle}: DefaultButtonProps) {
    return (
      <Link href={page} className="h-fit w-fit group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-yellow-300 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
        <p className="mb-3 text-2xl font-bold">
            {tittle+ ' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
            </span>
        </p>
      </Link>      
    )
}
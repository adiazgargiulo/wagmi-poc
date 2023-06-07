import Link from "next/link";
import {LinkProps} from "next/dist/client/link";
import {FC} from "react";

interface LinkCardProps {
    title: string
    description: string
    href: LinkProps['href']
    disable?: boolean
}

export const LinkCard: FC<LinkCardProps> = ({ title, description, href, disable }) => {
    return (
        <Link href={href}>
            <div className={disable ? 'opacity-50 pointer-events-none' : ''}>
                <div
                    className={'border border-gray-200 cursor-pointer flex flex-col hover:border-gray-800 items-center justify-center m-4 p-4 rounded-xl transition-colors'}>
                    <h2 className={'font-bold text-2xl'}>{title} &rarr;</h2>
                    <p className={'font-light text-center'}>{description}</p>
                </div>
            </div>
        </Link>
    )
}
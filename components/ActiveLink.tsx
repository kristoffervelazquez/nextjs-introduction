import React, { CSSProperties, FC } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';


const styles: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}


interface Props {
    text: string,
    href: string,
}

const ActiveLink: FC<Props> = ({ text, href }) => {

    const router = useRouter();

    return (

        <Link href={href}>
            <a style={router.asPath === href ? styles : undefined}>{text}</a>
        </Link>
    )
}

export default ActiveLink
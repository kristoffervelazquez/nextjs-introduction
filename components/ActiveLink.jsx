import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'

const styles = {
    color: '#0070f3',
    textDecoration: 'underline'
}

const ActiveLink = ({ text, href }) => {


    const router = useRouter();

    console.log(router);
    return (

        <Link href={href}>
            <a style={router.asPath === href ? styles : null}>{text}</a>
        </Link>
    )
}

export default ActiveLink
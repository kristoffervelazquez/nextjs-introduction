import React, { FC, PropsWithChildren } from 'react'
import Head from 'next/head'
import NavBar from '../NavBar'
import styles from './MainLayout.module.css'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Paginas - Kristoffer</title>
                <meta name="description" content="Pagina page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <NavBar />
            <main className={styles.main}>
                {children}

            </main>
        </div>
    )
}

export default MainLayout
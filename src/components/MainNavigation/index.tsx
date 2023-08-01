import React from 'react'
import Link from 'next/link'
import style from './style.module.css'
import Logo from '../Logo'
export default function MainNavigation() {
    return (
        <header className={style.header}>
            <Link href={'/ '}>
                <Logo />
            </Link>
            <nav>
                <ul>
                    <li><Link href={'/posts'}>Posts</Link></li>
                    <li><Link href={'/contact'}>Contact</Link></li>
                </ul>
            </nav>

        </header>
    )
}

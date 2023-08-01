import React from 'react'
import style from './style.module.css'
import Image from 'next/image'


export default function Hero() {
    return (
        <section className={style.hero}>
            <div className={style.image}>
                <Image
                    src='/image/site/max.png'
                    alt='an image'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hi, im zz</h1>
            <p>I blog about web developments</p>
        </section>
    )
}

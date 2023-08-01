import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import style from './style.module.css'
export default function PostItem(props) {
    const { title, image, excerpt, date, slug } = props.post
    const formatDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })
    const imagePath = `/image/posts/${slug}/${image}`
    return (
        <li className={style.post}>
            <Link href={`/posts/${slug}`}>
                <div className={style.image}>
                    <Image
                        src={imagePath}
                        alt={title}
                        width={300}
                        height={200}
                    />
                </div>
                <div className={style.content}>
                    <h3>{title}</h3>
                    <time>{formatDate}</time>
                    <p>{excerpt}</p>
                </div></Link>
        </li>
    )
}

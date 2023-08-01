'use client'
import React from 'react'
import PostHeader from '../PostHeader'
import style from './style.module.css'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Image from 'next/image'
export default function PostContent(props) {
    const { posts } = props
    const imgPath = `/image/posts/${posts.slug}/${posts.image}`

    const customComponents = {
        img: (image) => {
            return (
                <div className={style.image}>
                    <Image
                        src={`/image/posts/${posts.slug}/${image.src}`}
                        alt={image.alt}
                        width={600}
                        height={300}
                    />
                </div>

            )
        },
        code: (code) => {
            return (
                <SyntaxHighlighter
                    style={dark}
                    language={code.className}
                    children={code.children[0]}
                />
            )
        }
    }
    return (
        <article className={style.content}>
            <PostHeader title={posts.title} image={imgPath} />
            <ReactMarkdown components={customComponents}>
                {posts.content}
            </ReactMarkdown>
        </article>
    )
}

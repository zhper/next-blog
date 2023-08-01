import React from 'react'
import PostHeader from '../PostHeader'
import style from './style.module.css'
import ReactMarkdown from 'react-markdown'
const DUMMY_POSTS =
{
    title: 'title',
    image: 'getting-started-nextjs.png',
    date: new Date(),
    slug: 'getting-start-with-nextjs',
    excerpt: 'zzzz',
    content: '# this is a markdown',
}




export default function PostContent() {
    const imgPath = `/image/posts/${DUMMY_POSTS.slug}/${DUMMY_POSTS.image}`
    return (
        <article className={style.content}>
            <PostHeader title={DUMMY_POSTS.title} image={imgPath} />
            <ReactMarkdown>
                {DUMMY_POSTS.content}
            </ReactMarkdown>
        </article>
    )
}

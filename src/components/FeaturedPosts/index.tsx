import React from 'react'
import style from './style.module.css'
import PostGrid from '../post/PostGrid'
export default function FeaturedPosts(props) {
    const { posts } = props
    return (
        <section className={style.latest}>
            {<PostGrid posts={posts} />}
        </section>
    )
}

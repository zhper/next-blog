import React from 'react'
import style from './style.module.css'
import PostGrid from '../PostGrid'
export default function AllPostsCOM(props) {
    const { posts } = props
    return (
        <section className={style.posts}>
            <h1>All Posts</h1>
            <PostGrid posts={posts} />
        </section>
    )
}

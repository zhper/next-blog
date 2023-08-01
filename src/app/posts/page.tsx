import React from 'react'
import AllPostsCOM from '@/components/post/AllPosts'
const DUMMY_POSTS = [
    {
        title: 'title',
        image: 'getting-started-nextjs.png',
        date: new Date(),
        slug: 'getting-start-with-nextjs',
        excerpt: 'zzzz'
    },
    {
        title: 'title',
        image: 'getting-started-nextjs.png',
        date: new Date(),
        slug: 'getting-start-with-nextjs',
        excerpt: 'zzzz'
    },
    {
        title: 'title',
        image: 'getting-started-nextjs.png',
        date: new Date(),
        slug: 'getting-start-with-nextjs',
        excerpt: 'zzzz'
    },
    {
        title: 'title',
        image: 'getting-started-nextjs.png',
        date: new Date(),
        slug: 'getting-start-with-nextjs',
        excerpt: 'zzzz'
    },
    {
        title: 'title',
        image: 'getting-started-nextjs.png',
        date: new Date(),
        slug: 'getting-start-with-nextjs',
        excerpt: 'zzzz'
    },
    {
        title: 'title',
        image: 'getting-started-nextjs.png',
        date: new Date(),
        slug: 'getting-start-with-nextjs',
        excerpt: 'zzzz'
    },
]

export default function AllPosts() {
    return (
        <AllPostsCOM posts={DUMMY_POSTS} />
    )
}

// 1) hero section => Present ourselves
// 2) Featured Posts => 
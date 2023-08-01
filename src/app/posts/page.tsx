import React from 'react'
import AllPostsCOM from '@/components/post/AllPosts'
import { getAllPosts } from '@/utils/getAllPost'

export default function AllPosts() {
    const allPosts = getAllPosts()
    return (
        <AllPostsCOM posts={allPosts} />
    )
}

// 1) hero section => Present ourselves
// 2) Featured Posts => 
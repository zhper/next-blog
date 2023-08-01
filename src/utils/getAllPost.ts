import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const postsDir = path.join(process.cwd(), 'posts')

function getPostData(fileName) {
    const filePath = path.join(process.cwd(), fileName)
    const fileContent = fs.readdirSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postSlug = fileName.replace(/\.md$/, '')
    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData

}

export function getAllPosts() {
    const postsFile = fs.readdirSync(postsDir)
    const allPosts = postsFile.map(postFile => {
        return getPostData(postFile)
    })
    const sortedPosts = allPosts.sort((a, b) => a.date - b.date)
    return sortedPosts
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter(post => post.isFeatured)
    return featuredPosts

}
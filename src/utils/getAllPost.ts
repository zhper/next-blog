import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
const postsDir = path.join(process.cwd(), 'posts')

export function getPostFile () {
    return fs.readdirSync(postsDir)
}

export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, '')
    const filePath = path.join(postsDir, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(fileContent)

    const postData = {
        slug: postSlug,
        ...data,
        content
    }
    return postData

}

export function getAllPosts() {
    const postsFile = getPostFile()
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
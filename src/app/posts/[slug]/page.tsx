import PostContent from '@/components/post/PostDetail/PostContent'
import { getPostData } from '@/utils/getAllPost'
export default function PostDetail({ params }) {
    const { slug } = params
    const postData = getPostData(slug)
    return (
        <PostContent posts={postData} />
    )
}

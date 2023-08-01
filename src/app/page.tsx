import Hero from "@/components/Hero"
import FeaturedPosts from "@/components/FeaturedPosts"
import { getFeaturedPosts } from "@/utils/getAllPost"

export default function Home() {

  const featuredPosts = getFeaturedPosts()
  return (
    <>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  )
}

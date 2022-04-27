import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import PostComponent from '../components/Post'
import { sanityClient } from '../sanity'
import { Post } from '../typing'

interface Props {
  posts: [Post]
}

export default function Home({ posts } : Props) {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Hero />

      <div className="grid grid-cols-1 gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6">
        {posts.map(post =>(
            <PostComponent post={post} />
        ))}
      </div>

    </div>
  )
}

export const getServerSideProps = async ()=>{
  const query = `*[_type == "post"] {
  _id,
  title,
  author -> {
    name,
    image
  },
  description,
  mainImage,
  slug
}`

  const posts = await sanityClient.fetch(query)

  return {
    props:
      {
      posts 
    },
  }
}

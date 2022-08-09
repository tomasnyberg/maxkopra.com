import { useRouter } from 'next/router'
import Link from 'next/link'
import { getSortedPostsData, getAllPostIds, getPostData } from '../../../lib/posts'

const BlogPost = () => {

  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h3>This is post {id}</h3>
      <Link href="/">Go back</Link>
    </>
  )
}

export const getStaticProps = async (context) => {
  console.log(getSortedPostsData())
  console.log(getPostData())
  return {props: {}}
}

export const getStaticPaths = async (context) => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export default BlogPost
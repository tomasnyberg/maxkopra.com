import { useRouter } from 'next/router'
import Link from 'next/link'
import { getSortedPostsData, getAllPostIds, getPostData } from '../../../lib/posts'

const BlogPost = ({postData}) => {

  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <h3>{postData.title}</h3>
      <Link href="/">Go back</Link>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

export default BlogPost
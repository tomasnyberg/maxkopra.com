import { useRouter } from 'next/router'
import Link from 'next/link'

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
  return {props: {}}
}

export const getStaticPaths = async (context) => {
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false, // can also be true or 'blocking'
  }
}

export default BlogPost
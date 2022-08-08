import { useRouter } from 'next/router'

const BlogPost = () => {

  const router = useRouter()
  const { id } = router.query

  return <p>Post: {id}</p>
}

export const getServerSideProps = () => {
  return {props: {}}
}

export default BlogPost
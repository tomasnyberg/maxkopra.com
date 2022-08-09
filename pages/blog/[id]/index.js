import { useRouter } from 'next/router'
import Link from 'next/link'
import {  getAllPostIds, getPostData } from '../../../lib/posts'
import Head from 'next/head'

const BlogPost = ({postData}) => {

  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <h2>{postData.title}</h2>
      <h3>{postData.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
  const postData = await getPostData(params.id)
  console.log(postData)
  return {
    props: {
      postData
    }
  }
}

export default BlogPost
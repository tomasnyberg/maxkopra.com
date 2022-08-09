import { useRouter } from 'next/router'
import Link from 'next/link'
import {  getAllPostIds, getPostData } from '../../../lib/posts'
import Meta from '../../../components/Meta'

const BlogPost = ({postData}) => {

  const router = useRouter()
  const { id } = router.query

  return (
    <>
      <Meta title={postData.title}></Meta>
      <h2>{postData.title}
      </h2>
      <h3>{postData.date}</h3>
        <span> {Math.ceil(postData.wordcount/200)} minute read</span>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <Link href="/">Go back</Link>
    </>
  )
}

function removeHTML(str){ 
    return str.replace(/<[^>]+>/g, '')
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
  let filtered = removeHTML(postData.contentHtml)
  // split the filtered line into an array of words and newline characters and filter out empty strings
  let words = filtered.split(/\s+|\n/).filter(Boolean)
  postData.wordcount = words.length
  return {
    props: {
      postData
    }
  }
}

export default BlogPost
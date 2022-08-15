import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import styles from '../styles/index.module.css'
import { useContext } from 'react'
import { darkmodeContext } from '../components/Layout'

export default function Home({posts}) {
  
  const { darkmode } = useContext(darkmodeContext)

  return (
    <div>
      <h2 className={`${styles.blogheader} ${darkmode ? styles.darkblogheader:styles.lightblogheader}`}>Blog</h2>
      <section>
        {posts.map(({title, subtitle, date, id}) => {
          return (
            <div className={styles.blog} key={id}>
              <Link href={`/blog/${id}`}>
                <h3 className={styles.blogtitle}>{title}</h3>
              </Link>
              <h4 className={styles.blogsubtitle}>{subtitle}</h4>
              <p className={styles.blogdate}>{date}</p>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export async function getStaticProps(){
  const posts = getSortedPostsData()
  return {
    props: {
      posts 
    }
  }
}

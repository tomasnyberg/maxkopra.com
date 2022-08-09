import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import styles from '../styles/index.module.css'

export default function Home({posts}) {
  return (
    <div>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, ipsa!</h2>
      <section>
        <h2 className={styles.blogheader}>Recent posts</h2>
        {posts.map(({title, subtitle, date, id}) => {
          return (
            <div className={styles.blog} key={id}>
              <Link href={`/blog/${id}`}>
                <h3 className={styles.blogtitle}>{title}</h3>
              </Link>
              <h4 className={styles.blogsubtitle}>{subtitle}</h4>
              <h5 className={styles.blogdate}>{date}</h5>
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

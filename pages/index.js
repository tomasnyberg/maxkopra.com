import Link from "next/link"
import { getSortedPostsData } from "../lib/posts"
import Head from "next/head"
import styles from '../styles/index.module.css'

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Max Kopra</title>
      </Head>
      <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, ipsa!</h2>
      <section>
        <h2 className={styles.blogtitle}>Recent posts</h2>
      </section>
    </div>
  )
}

export async function getStaticProps(){
  const data = getSortedPostsData()
  console.log(data)
  return {
    props: {
      data
    }
  }
}
